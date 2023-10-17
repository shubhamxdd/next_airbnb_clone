"use client";

import React from "react";
import Container from "./Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is near a beach.",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This property has a windmill.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is Modern.",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in countryside.",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property is has a pool.",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake.",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities.",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "This property is in a castle.",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities.",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property has camping activities.",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a cave.",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert.",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in the banr.",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!pathname) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            selected={category === item.label}
            icon={item.icon}
            label={item.label}
            key={item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;