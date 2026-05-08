import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 overflow-hidden rounded-4xl bg-brand-espresso sm:mx-0">
        <div className="grid min-h-[min(520px,72vh)] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-16 xl:px-16">
          <div className="flex w-full flex-col items-start justify-center">
            <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:text-4xl lg:text-[2.35rem] xl:text-5xl">
              THE WORLD IS MOVING.
              <span className="mt-2 block md:mt-3">
                ARE YOU LEADING OR WATCHING?
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Stop being &quot;lost in the noise.&quot; Start being the noise.
              Let&apos;s build your global Pehechan.
            </p>
            <div className="mt-9">
              <Link
                href="https://calendar.app.google/EUTGdxUZkbBtd7Ct6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-lime-400 px-8 py-3.5 text-sm font-semibold text-brand-espresso transition hover:bg-lime-300 active:scale-[0.98]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative flex w-full min-h-[min(88vw,360px)] items-center justify-center overflow-visible pb-4 pt-2 lg:min-h-0 lg:justify-end lg:pb-0 lg:pt-0">
            <div className="relative h-[min(78vw,320px)] w-[min(78vw,320px)] shrink-0 sm:h-[min(72vw,380px)] sm:w-[min(72vw,380px)] lg:h-[min(420px,40vw)] lg:w-[min(420px,40vw)] lg:max-w-[420px]">
              <div className="flex h-full w-full overflow-hidden rounded-full shadow-[0_28px_64px_-16px_rgba(0,0,0,0.45)] ring-2 ring-white/10">
                <div className="relative h-full w-full">
                  <Image
                    src="/hero/about.png"
                    alt="Pehechan contact visual"
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 1024px) 78vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
