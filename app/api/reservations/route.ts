import getCurrentUser from "@/actions/getCurrentUser";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const body = await request.json();

  const { listingId, startDate, endDate, totalPrice } = body;

  if (!listingId || !startDate || !endDate || !totalPrice)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const listingAndReservation = await client.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservation: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });
  return NextResponse.json(listingAndReservation);
}
