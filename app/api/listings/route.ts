import getCurrentUser from "@/actions/getCurrentUser";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const body = await request.json();

  if (!currentUser)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const {
    category,
    location,
    guestCount,
    roomCount,
    bathroomCount,
    imageSrc,
    price,
    title,
    description,
  } = body;

  const listing = await client.listing.create({
    data: {
      bathroomCount,
      category,
      description,
      guestCount,
      imageSrc,
      locationValue: location.value,
      price: parseInt(price, 10),
      roomCount,
      title,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
