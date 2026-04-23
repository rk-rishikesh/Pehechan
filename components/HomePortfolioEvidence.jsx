import Image from "next/image";
import Container from "./Container";
import FadeIn from "./FadeIn";

const evidenceItems = [
  {
    name: "Active Life",
    proof: "We turned a clinic into a community leader.",
    image:
      "https://picsum.photos/seed/active-life-med/900/700",
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
    image:
      "https://picsum.photos/seed/anandam-care-tech/900/700",
  },
  {
    name: "Gowell Physiotherapy",
    proof:
      "We turned physical recovery into a high-performance standard.",
    image:
      "https://picsum.photos/seed/gowell-physio-performance/900/700",
  },
];

const HomePortfolioEvidence = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <FadeIn>
          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-brand-rose">
              Portfolio: The Evidence
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
              WE DON&apos;T PROMISE. WE PROVE.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {evidenceItems.map((item) => (
            <FadeIn key={item.name}>
              <article className="overflow-hidden rounded-[1.6rem] border border-brand-sage/20 bg-stone-50 shadow-[0_16px_36px_-24px_rgba(61,51,42,0.35)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={`${item.name} portfolio case`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-4 md:px-6 md:py-5">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-brand-espresso">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-espresso/72">
                    {item.proof}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomePortfolioEvidence;
