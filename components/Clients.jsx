import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Client 1", "/logos/1.png"],
  ["Client 2", "/logos/2.png"],
  ["Client 3", "/logos/3.png"],
  ["Client 4", "/logos/4.png"],
  ["Client 5", "/logos/5.png"],
  ["Client 6", "/logos/6.png"],
];

const Clients = () => {
  return (
    <div className="rounded-4xl mx-4 bg-brand-espresso py-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-brand-sage/40" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-3 gap-x-8 gap-y-10"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex justify-center">
                <FadeIn>
                  <Image src={logo} alt={client} width={180} height={72} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
