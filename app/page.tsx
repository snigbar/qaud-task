import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import RecipeSection from "./sections/RecipeSection";

export default function Home() {
  return (
    <main className="flex 2xl:w-4/5 xl:w-10/12 lg:w-full min-h-screen mx-auto flex-col items-center px-4 pt-4">
      <Navbar />
      <Banner></Banner>
      <RecipeSection section="Popular" filter="IsPopular"></RecipeSection>
      <RecipeSection
        section="Recommended"
        filter="IsRecommended"
      ></RecipeSection>
      <Footer></Footer>
    </main>
  );
}
