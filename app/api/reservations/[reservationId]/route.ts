import getCurrentUser from "@/actions/getCurrentUser";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  requuest: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const { reservationId } = params;
  if (!reservationId || typeof reservationId !== "string")
    return NextResponse.json(
      { error: "Invalid reservationId" },
      { status: 400 }
    );

  const reservation = await client.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [
        {
          userId: currentUser.id,
        },
        {
          listing: {
            userId: currentUser.id,
          },
        },
      ],
    },
  });

  return NextResponse.json(reservation);
}
