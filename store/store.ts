import getRecipe from "@/app/lib/getRecipeData";
import { create } from "zustand";

export interface TRecipe {
  Id?: string;
  Name: string;
  Price: number;
  ImageUrl: string;
  IsPopular: boolean;
  IsRecommended: boolean;
}

export interface RecipeState {
  recipes: TRecipe[];
  addRecipe: (recipe: TRecipe) => void;
}

export const useRecipeStore = create<RecipeState>()((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
}));

const fetchRecipes = async () => {
  try {
    const { Items } = await getRecipe();
    if (Items.length > 0) useRecipeStore.setState({ recipes: Items });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

fetchRecipes();
