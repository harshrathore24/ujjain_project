import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedPackages } from "@/components/sections/featured-packages";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <FeaturedPackages />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
