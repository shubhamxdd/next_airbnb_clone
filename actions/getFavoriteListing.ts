import client from "@/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListing() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const favorites = await client.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorites = favorites.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}