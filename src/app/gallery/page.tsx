import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { GalleryGrid } from "./gallery-grid";

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  description: "Moments from real Ujjain darshan trips — temples, ghats, travelers and heritage sites.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Moments From The Yatra"
        title="Photo & video gallery"
        description="A glimpse into real trips we've guided — temples, ghats, food and the travelers who made it all memorable."
        image="https://picsum.photos/seed/gallery-page-hero/1600/500"
      />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <GalleryGrid />
      </section>
    </>
  );
}
