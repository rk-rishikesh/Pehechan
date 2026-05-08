import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

const HomeHero = () => {
  return (
    <section className="border-b border-brand-sage/20">
      <div className="grid min-h-[100dvh] grid-cols-1 lg:min-h-[min(100dvh,920px)] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-white px-6 py-14 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
          <FadeIn>
            <div className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-sm bg-brand-sage"
                aria-hidden
              />
              <span className="text-sm font-medium text-brand-espresso">
                Fix Your Direction.
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-espresso [text-wrap:balance] md:text-5xl lg:text-[2.75rem] xl:text-6xl">
              WE TURN STARTUPS INTO STANDARDS.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-espresso/70 md:text-xl">
              Most companies just exist. We make sure you matter. Pehechan is
              a global powerhouse designed for one thing: Extreme Growth. We
              don&apos;t just tell your story, we make the world believe in it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-brand-espresso px-7 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-brand-espresso-dark active:scale-[0.98]"
              >
                ACTIVATE YOUR BRAND
              </Link>
              <Link
                href="https://calendar.app.google/EUTGdxUZkbBtd7Ct6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-brand-espresso px-7 py-3 text-xs font-semibold uppercase tracking-wide text-brand-espresso transition hover:bg-brand-espresso/5 active:scale-[0.98]"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="relative flex min-h-[min(100vw,520px)] items-center justify-center bg-brand-mint px-6 py-14 sm:px-12 lg:min-h-0 lg:py-12">
          <div className="relative w-full max-w-2xl">
            <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-full shadow-[0_24px_60px_-20px_rgba(84,70,58,0.25)] ring-4 ring-white/90 sm:max-w-xl">
              <Image
                src="/hero/main.png"
                alt="Pehechero-splithan brand visual representing growth and momentum"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, min(560px, 42vw)"
                priority
              />
            </div>
{/* 
            <div className="absolute bottom-4 left-4 z-10 w-[min(280px,calc(100%-2rem))] rounded-2xl bg-white p-4 shadow-[0_20px_40px_-12px_rgba(84,70,58,0.2)] sm:p-5">
              <div className="flex gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-mint/60"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-brand-espresso"
                    aria-hidden
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-brand-espresso">
                    Pehechan Command
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-brand-espresso/60">
                    Growth desk · Worldwide
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-brand-sage/25 pt-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-brand-espresso/50">
                  Pipeline
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blush-light/80 px-2.5 py-1 text-[0.7rem] font-medium text-brand-espresso">
                    Scale engine
                  </span>
                  <span className="inline-flex items-center rounded-full bg-brand-sage/35 px-2.5 py-1 text-[0.7rem] font-medium text-brand-espresso">
                    Active
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
