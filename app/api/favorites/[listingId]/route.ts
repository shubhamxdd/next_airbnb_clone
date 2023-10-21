import getCurrentUser from "@/actions/getCurrentUser";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string")
    return NextResponse.json({ error: "invalid listingId" }, { status: 400 });

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(listingId);

  const user = await client.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });
  return NextResponse.json(user);
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
    return NextResponse.json({ error: "invalid listingId d" }, { status: 400 });

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter((id) => id !== listingId);

  const user = await client.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });
  return NextResponse.json(user);
}
