import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import RecipeSection from "./sections/RecipeSection";

export default function Home() {
  return (
    <main className="flex 2xl:w-4/5 xl:w-10/12 lg:w-full min-h-screen mx-auto flex-col items-center p-4">
      <Navbar />
      <Banner></Banner>
      <RecipeSection section="Popular" filter="IsPopular"></RecipeSection>
      <RecipeSection
        section="Recommended"
        filter="IsRecommended"
      ></RecipeSection>
    </main>
  );
}
