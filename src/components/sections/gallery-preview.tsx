import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  { seed: "gallery-1", span: "sm:row-span-2 sm:col-span-1", video: false },
  { seed: "gallery-2", span: "", video: false },
  { seed: "gallery-3", span: "", video: true },
  { seed: "gallery-4", span: "", video: false },
  { seed: "gallery-5", span: "sm:col-span-1", video: false },
];

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading
          align="left"
          eyebrow="Moments from the yatra"
          title="Photos & videos from real trips"
        />
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          View full gallery
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] gap-4">
        {items.map((item, i) => (
          <div
            key={item.seed}
            className={`relative overflow-hidden rounded-2xl group ${item.span} ${
              i === 0 ? "row-span-2" : ""
            }`}
          >
            <Image
              src={`https://picsum.photos/seed/${item.seed}/600/700`}
              alt="Ujjain trip moment"
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/20 transition-colors" />
            {item.video && (
              <span className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="size-10 text-cream-50 drop-shadow-lg" />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
