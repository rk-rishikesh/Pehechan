import Container from "./Container";
import FadeIn from "./FadeIn";

const HomeVisionMission = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-5xl">
            <p className="text-center font-display text-sm font-semibold tracking-wide text-brand-rose">
              The Strategic 4
            </p>
            <h2 className="mt-4 text-center font-display text-3xl font-semibold leading-[1.12] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
              The Machinery of Dominance
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              <article className="rounded-[1.6rem] bg-brand-rose px-7 py-8 text-white shadow-[0_18px_40px_-24px_rgba(61,51,42,0.45)] md:px-8 md:py-9">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  THE VISION
                </h3>
                <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-white/92 sm:text-base">
                  We have seen a future where your name is the only one that
                  matters. Our vision is to build a global powerhouse that
                  transcends borders, turning the fire of a founder&apos;s dream
                  into a borderless standard of authority. We don&apos;t see a
                  world of endless competition; we see a world where Pehechan
                  stands as the ultimate seal of excellence, creating a
                  landscape where the brands we build don&apos;t just exist, they
                  rule. This is about one global name, one undeniable standard
                  of power, and one identity that the entire world recognizes as
                  the elite.
                </p>
              </article>

              <article className="rounded-[1.6rem] bg-brand-espresso px-7 py-8 text-brand-blush-light shadow-[0_18px_40px_-24px_rgba(61,51,42,0.55)] md:px-8 md:py-9">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-brand-blush-light sm:text-4xl">
                  THE MISSION
                </h3>
                <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-brand-blush-light/90 sm:text-base">
                  Our mission is to strip away the digital noise and find the
                  raw, unfiltered soul of your business to give it the gravity
                  it deserves. We don&apos;t play with &quot;trial and error&quot;;
                  we deploy a high-velocity growth engine designed to
                  fast-track your reach and force the market to listen. By
                  combining cinematic storytelling with aggressive strategy, we
                  don&apos;t just help you enter the room, we take the market,
                  making sure your voice is the loudest and your brand is the
                  only choice.
                </p>
              </article>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default HomeVisionMission;
