"use client";

import { SafeUser } from "@/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  currentUser?: SafeUser | null;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ListingCard = ({
  data,
  actionId,
  actionLabel,
  currentUser,
  disabled,
  onAction,
  reservation,
}: ListingCardProps) => {
  const router = useRouter();
  return <div>ListingCard</div>;
};

export default ListingCard;
