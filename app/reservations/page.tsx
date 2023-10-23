import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import EmptyState from "@/components/EmptyState";
import ReservationClient from "./ReservationClient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <EmptyState title="Unauthorized" subtitle="Please login to continue" />
    );

  const reservations = await getReservations({ authorId: currentUser.id });

  //   console.log(reservations)

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your property"
      />
    );

  return (
    <div>
      <ReservationClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ReservationPage;
