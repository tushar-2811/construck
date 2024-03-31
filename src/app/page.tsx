import Feature from "@/components/Feature";
import FeaturedServices from "@/components/FeaturedServices";
import GridFeature from "@/components/GridFeature";
import HeroSection from "@/components/HeroSection";
import NewHeroSection from "@/components/NewHero";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
     <main className="min-h-screen antialiased bg-grid-white/[0.2] ">
        <NewHeroSection/>
        {/* <FeaturedServices/> */}
        <Feature/>
        <GridFeature/>
      
     </main>
    </>
   
  );
}
