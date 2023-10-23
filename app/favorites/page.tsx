import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import FavoritesClient from "./FavoritesClient";
import getFavoriteListing from "@/actions/getFavoriteListing";

const FavoritesPage = async () => {
  const currentUser = getCurrentUser();

  if (!currentUser)
    return (
      <EmptyState title="Unauthorzed" subtitle="Please login to continue" />
    );

  const listings = await getFavoriteListing();
  if (listings.length === 0)
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings yet."
      />
    );

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default FavoritesPage;
