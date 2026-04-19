import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import HomeAbout from "@/components/HomeAbout";
import HomeGrowthScoreboard from "@/components/HomeGrowthScoreboard";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-brand-espresso">
      <HomeHero />
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <Clients />
      </div>
      <HomeAbout />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <HomeGrowthScoreboard />
      <ContactSection />
    </main>
  );
}
