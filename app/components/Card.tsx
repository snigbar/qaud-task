import { TRecipe } from "@/store/store";
import Image from "next/image";
import React from "react";

export default function Card({ data }: { data: TRecipe }) {
  return (
    <div className="flex flex-col justify-center item-between gap-4 h-full w-full">
      <Image
        src={data.ImageUrl}
        className="object-cover"
        alt={data.Name}
        height={500}
        width={500}
      />
      <p className="text-lg text-center">{data.Name}</p>
    </div>
  );
}
