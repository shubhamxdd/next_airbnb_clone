import getCurrentUser from "@/actions/getCurrentUser";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  listingId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string")
    return NextResponse.json(
      { error: "Invalid listing id provided" },
      { status: 400 }
    );

  const listing = await client.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
