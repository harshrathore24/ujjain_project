import type { Metadata } from "next";
import { getCars } from "@/lib/data";
import { CarCard } from "@/components/car-card";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Car Rental",
  description:
    "Rent an AC car with driver in Ujjain — sedans, SUVs, tempo travellers and luxury cars for darshan and sightseeing.",
};

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <>
      <PageHero
        eyebrow="Travel in Comfort"
        title="Car rental with experienced local drivers"
        description="Every vehicle comes with a driver who knows Ujjain's roads, timings and shortcuts — so you never worry about navigation."
        image="https://picsum.photos/seed/cars-hero/1600/500"
      />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}
