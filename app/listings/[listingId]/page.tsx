import getCurrentUser from "@/actions/getCurrentUser";
import getListingsById from "@/actions/getListingsById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

interface Props {
  listingId?: string;
}

const ListingsPage = async ({ params }: { params: Props }) => {
  const { listingId } = params;
  const currentUser = await getCurrentUser();

  const listing = await getListingsById(params);

  if (!listing) {
    return <EmptyState subtitle="No listing found!" />;
  }

  return (
    <>
      <div>
        {/* @ts-ignore */}
        <ListingClient listing={listing} currentUser={currentUser} />
      </div>
    </>
  );
};

export default ListingsPage;
