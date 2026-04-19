import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import img1 from "@/images/team/angela-fisher.jpeg";
import img2 from "@/images/team/benjamin-russel.jpeg";
import img3 from "@/images/team/blake-reid.jpeg";
import img4 from "@/images/team/chelsea-hagon.jpeg";
import img5 from "@/images/team/dries-vincent.jpeg";

const portraits = [
  { src: img1, alt: "Portrait of Angela Fisher" },
  { src: img2, alt: "Portrait of Benjamin Russel" },
  { src: img3, alt: "Portrait of Blake Reid" },
  { src: img4, alt: "Portrait of Chelsea Hagon" },
  { src: img5, alt: "Portrait of Dries Vincent" },
];

const HomeAbout = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
          <div>
            <p className="font-display text-sm font-semibold text-brand-rose">
              About Pehechan: The &quot;Why&quot;
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-brand-espresso [text-wrap:balance] md:text-4xl lg:text-5xl">
              THE LAST PARTNER YOU&apos;LL EVER NEED.
            </h2>
          </div>
          <div className="flex flex-col lg:pt-1">
            <p className="text-lg leading-relaxed text-brand-espresso/80 md:text-xl">
              We don&apos;t play by the old rules of marketing. We rewrite them.
              Pehechan was built to solve a single problem: Potential without
              Presence. We take founders who have the &quot;Product&quot; and
              give them the &quot;Power.&quot; We are the bridge between being a
              &quot;business&quot; and being a household name. If you are ready
              to scale, we are the engine.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex rounded-full bg-lime-400 px-8 py-3 text-sm font-semibold text-brand-espresso transition hover:bg-lime-300 active:scale-[0.98]"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        <ul
          role="list"
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5"
        >
          {portraits.map((item) => (
            <li key={item.alt} className="overflow-hidden rounded-3xl">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 18vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HomeAbout;
