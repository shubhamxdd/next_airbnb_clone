"use client";

import useCountries from "@/hooks/useCountries";
import useSearchModal from "@/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
// import { BiSearch } from "react-icons/bi";
import { ImSearch } from "react-icons/im";

const Search = () => {
  const searchodal = useSearchModal();
  const searchParams = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = searchParams?.get("locationValue");
  const startDate = searchParams?.get("startDate");
  const endDate = searchParams?.get("endDate");
  const guestCount = searchParams?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) return getByValue(locationValue as string)?.label;
    return "Search";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const startD = new Date(startDate as string);
      const endD = new Date(endDate as string);

      let diffInDays = differenceInDays(endD, startD);

      if (diffInDays === 0) {
        diffInDays = 1;
      }

      return `${diffInDays} ${diffInDays === 1 ? "Day" : "Days"}`;
    }
    return "Date";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount)
      return `${guestCount} ${guestCount === "1" ? "Guest" : "Guests"}`;
    return "Add guests";
  }, [guestCount]);

  return (
    <div
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={searchodal.onOpen}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          {durationLabel}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            {/* <BiSearch size={14} /> */}
            <ImSearch size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
