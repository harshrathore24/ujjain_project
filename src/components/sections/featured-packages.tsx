import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPopularPackages } from "@/lib/data";
import { PackageCard } from "@/components/package-card";
import { SectionHeading } from "@/components/ui/section-heading";

export async function FeaturedPackages() {
  const packages = await getPopularPackages(3);

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading
          align="left"
          eyebrow="Curated Yatra Plans"
          title="Popular tour packages"
          description="From a focused day trip to an immersive multi-day heritage journey — pick a plan or let us customize one for you."
        />
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          View all packages
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
