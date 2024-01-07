"use client";
import React from "react";
import Carousel from "../components/Carousel";
import { useRecipeStore } from "@/store/store";

import { openModal } from "../components/Modal";

type props = {
  section: "Popular" | "Recommended";
  filter: "IsPopular" | "IsRecommended";
};
export default function RecipeSection({ section, filter }: props) {
  const recipes = useRecipeStore((state) => state.recipes).filter(
    (val) => val[filter] === true
  );

  return (
    <section className="w-full mb-4">
      <div className="w-full py-4 flex items-center justify-between relative">
        <p className="text-xl font-medium">{section}</p>
        <button className="btn text-orange-500 mr-16" onClick={openModal}>
          Add More
        </button>
      </div>
      <Carousel data={recipes}></Carousel>
    </section>
  );
}
