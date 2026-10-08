import { Users, CalendarClock, Map, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { StatCounter } from "@/components/ui/stat-counter";

const icons = [Users, CalendarClock, Map, Star];

export function StatsBar() {
  return (
    <section className="relative -mt-16 z-10 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl bg-cream-50 shadow-xl shadow-brand-950/10 border border-gold-200/60 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gold-200/60">
        {siteConfig.stats.map((stat, i) => {
          const Icon = icons[i];
          const isDecimal = !Number.isInteger(stat.value);
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 px-4 py-7 text-center"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon className="size-5" />
              </span>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-brand-800">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={isDecimal ? 1 : 0}
                />
              </p>
              <p className="text-xs sm:text-sm text-ink-500">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
