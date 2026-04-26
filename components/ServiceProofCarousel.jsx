"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const AUTOPLAY_MS = 4000;

export default function ServiceProofCarousel({ items = [] }) {
  const [active, setActive] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (total <= 1) return undefined;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [total]);

  if (!total) return null;

  return (
    <div className="mt-14">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item, index) => (
            <figure key={`${item}-${index}`} className="min-w-full pr-2 sm:pr-0">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-brand-rose">
                Case 0{index + 1}
              </p>
              <blockquote className="mt-5 max-w-4xl font-display text-2xl font-medium leading-tight tracking-tight text-brand-espresso sm:text-3xl lg:text-4xl">
                <p className="before:content-['“'] after:content-['”']">
                  {item}
                </p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>

      {total > 1 ? (
        <div className="mt-8 flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={`${item}-dot-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={clsx(
                "h-2.5 rounded-full transition-all",
                index === active
                  ? "w-8 bg-brand-rose"
                  : "w-2.5 bg-brand-sage/45 hover:bg-brand-sage/70"
              )}
              aria-label={`Show proof item ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
