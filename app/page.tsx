import Navbar from "./components/Navbar";
import getRecipe from "./lib/getRecipeData";
import Banner from "./sections/Banner";

export default function Home() {
  getRecipe();
  return (
    <main className="flex 2xl:w-4/5 xl:w-10/12 lg:w-full  min-h-screen mx-auto flex-col items-center p-4">
      <Navbar />
      <Banner></Banner>
    </main>
  );
}
