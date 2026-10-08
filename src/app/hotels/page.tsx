import type { Metadata } from "next";
import { getHotels } from "@/lib/data";
import { HotelCard } from "@/components/hotel-card";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Hotel Booking",
  description:
    "Book hotels in Ujjain near Mahakaleshwar Temple — budget, deluxe and luxury options, all vetted for comfort.",
};

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <>
      <PageHero
        eyebrow="Stay in Ujjain"
        title="Comfortable stays near every ghat and temple"
        description="From budget pilgrim lodges to riverside luxury — book a hotel that fits your trip and your budget."
        image="https://picsum.photos/seed/hotels-hero/1600/500"
      />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </>
  );
}
