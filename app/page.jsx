import Clients from "@/components/Clients";
import HomeAbout from "@/components/HomeAbout";
import HomeGrowthScoreboard from "@/components/HomeGrowthScoreboard";
import HomeHero from "@/components/HomeHero";
import HomePortfolioEvidence from "@/components/HomePortfolioEvidence";
// import HomeTestimonialsCarousel from "@/components/HomeTestimonialsCarousel";
import HomeVisionMission from "@/components/HomeVisionMission";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-brand-espresso">
      <HomeHero />
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <Clients />
      </div>
      <HomeAbout />
      {/* <HomeTestimonialsCarousel /> */}
      <Services />
      <HomeVisionMission />
      <HomePortfolioEvidence />
      <HomeGrowthScoreboard />
    </main>
  );
}
