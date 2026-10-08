"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryItem = {
  seed: string;
  category: "Temples" | "Ghats" | "Travelers" | "Food" | "Heritage";
  video?: boolean;
  tall?: boolean;
};

const items: GalleryItem[] = [
  { seed: "g-mahakal-1", category: "Temples", tall: true },
  { seed: "g-ramghat-1", category: "Ghats" },
  { seed: "g-travelers-1", category: "Travelers", video: true },
  { seed: "g-heritage-1", category: "Heritage" },
  { seed: "g-food-1", category: "Food" },
  { seed: "g-mahakal-2", category: "Temples" },
  { seed: "g-ramghat-2", category: "Ghats", tall: true },
  { seed: "g-travelers-2", category: "Travelers" },
  { seed: "g-heritage-2", category: "Heritage", video: true },
  { seed: "g-food-2", category: "Food" },
  { seed: "g-mahakal-3", category: "Temples" },
  { seed: "g-ramghat-3", category: "Ghats" },
  { seed: "g-travelers-3", category: "Travelers" },
  { seed: "g-heritage-3", category: "Heritage" },
  { seed: "g-mahakal-4", category: "Temples", tall: true },
  { seed: "g-travelers-4", category: "Travelers" },
];

const categories = ["All", "Temples", "Ghats", "Travelers", "Heritage", "Food"] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === c
                ? "bg-brand-700 text-cream-50"
                : "bg-cream-100 text-ink-700 hover:bg-cream-200"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((item) => (
          <div
            key={item.seed}
            className={cn(
              "relative mb-4 overflow-hidden rounded-2xl group break-inside-avoid",
              item.tall ? "h-80" : "h-52"
            )}
          >
            <Image
              src={`https://picsum.photos/seed/${item.seed}/600/${
                item.tall ? 800 : 500
              }`}
              alt={`${item.category} in Ujjain`}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/30 transition-colors" />
            <span className="absolute bottom-3 left-3 rounded-full bg-brand-950/70 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.category}
            </span>
            {item.video && (
              <span className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="size-10 text-cream-50 drop-shadow-lg" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
