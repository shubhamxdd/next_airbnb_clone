"use client";

import { SafeReservations, SafeUser } from "@/types";
import Container from "./Container";
import Heading from "./Heading";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "./ListingCard";

interface TripsClientProps {
  reservations: SafeReservations[];
  currentUser?: SafeUser | null;
}

const TripsClient = ({ reservations, currentUser }: TripsClientProps) => {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    async (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled successfully");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Something went wrong");
          console.log(error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
