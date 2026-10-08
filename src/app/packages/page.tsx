import type { Metadata } from "next";
import { getPackages } from "@/lib/data";
import { PackageCard } from "@/components/package-card";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Browse Ujjain darshan and yatra packages — day trips, Bhasma Aarti specials, heritage circuits and family retreats.",
};

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <>
      <PageHero
        eyebrow="Yatra Packages"
        title="Find the perfect Ujjain darshan plan"
        description="Every package is designed and personally led by our local team — from a quick single-day darshan to an immersive multi-day heritage journey."
        image="https://picsum.photos/seed/packages-hero/1600/500"
      />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    </>
  );
}
