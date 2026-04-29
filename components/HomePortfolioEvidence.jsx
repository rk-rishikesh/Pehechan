 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const evidenceItems = [
  {
    name: "Active Life",
    proof: "We turned a clinic into a community leader.",
    image: "/portfolio/Active Life.png",
  },
  {
    name: "Bhansali Buildcon",
    proof: "We made \"Interior Design\" look like a luxury dream.",
    image:
      "https://picsum.photos/seed/bhansali-buildcon-lux/900/700",
  },
  {
    name: "Anandam",
    proof: "We built the future of care through tech and soul.",
    image: "/portfolio/Anandam.png",
  },
  {
    name: "Gowell Physiotherapy",
    proof:
      "We turned physical recovery into a high-performance standard.",
    image: "/portfolio/Gowell Physiotherapy.png",
  },
];

const HomePortfolioEvidence = () => {
  const [active, setActive] = useState(0);
  const total = evidenceItems.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <FadeIn>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-display text-sm font-semibold tracking-wide text-brand-rose">
                Portfolio: The Evidence
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
                WE DON&apos;T PROMISE. WE PROVE.
              </h2>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-sage/30 bg-white text-brand-espresso transition hover:border-brand-sage/50 hover:bg-brand-blush-light/30 active:scale-[0.98]"
                aria-label="Previous portfolio slide"
              >
                <HiArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-sage/30 bg-white text-brand-espresso transition hover:border-brand-sage/50 hover:bg-brand-blush-light/30 active:scale-[0.98]"
                aria-label="Next portfolio slide"
              >
                <HiArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-brand-sage/20 bg-stone-50">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {evidenceItems.map((item) => (
                <article
                  key={item.name}
                  className="grid w-full min-w-full grid-cols-1 md:grid-cols-[minmax(280px,0.95fr)_1.45fr]"
                >
                  <div className="flex flex-col justify-between bg-brand-espresso px-7 py-8 text-brand-blush-light md:px-9 md:py-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blush-light/70">
                        Case Study
                      </p>
                      <h3 className="mt-4 font-display text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl">
                        {item.name}
                      </h3>
                      <p className="mt-6 max-w-[30ch] text-base leading-relaxed text-brand-blush-light/90">
                        {item.proof}
                      </p>
                    </div>
                    <div className="mt-8 h-px w-full bg-brand-blush-light/35" />
                  </div>
                  <div className="relative h-full min-h-[22rem] overflow-hidden md:min-h-[34rem]">
                    <Image
                      src={item.image}
                      alt={`${item.name} portfolio case`}
                      fill
                      sizes="(max-width: 768px) 100vw, 62vw"
                      className="h-full w-full object-cover object-center"
                    />
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-brand-espresso via-brand-espresso/45 to-transparent md:w-36"
                      aria-hidden
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between md:hidden">
            <div className="flex items-center gap-2">
              {evidenceItems.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-brand-rose"
                      : "w-2.5 bg-brand-sage/45 hover:bg-brand-sage/65"
                  }`}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-sage/30 bg-white text-brand-espresso"
                aria-label="Previous portfolio slide"
              >
                <HiArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-sage/30 bg-white text-brand-espresso"
                aria-label="Next portfolio slide"
              >
                <HiArrowRight className="h-4 w-4" />
              </button>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      );
    };

export default HomePortfolioEvidence;
