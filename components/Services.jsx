import React from "react";
import Link from "next/link";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List from "./List";
import {
  HiArrowRight,
  HiOutlineCodeBracketSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineShoppingBag,
  HiOutlineRectangleStack,
} from "react-icons/hi2";

const services = [
  {
    title: "THE BLUEPRINT - CONSULTING",
    description:
      "We don't give advice. We build blueprints. We look at your business, find the friction, and create a roadmap to global scale. Strategy is the brain; we make it sharp.",
    href: "/services/consulting",
    icon: HiOutlineCodeBracketSquare,
  },
  {
    title: "Digital Marketing",
    description:
      "We don't chase likes. We chase dominance. We put your brand in front of the right eyes at the right time. We don't just get you clicks; we build a digital empire.",
    href: "/services/digital-marketing",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    title: "Events",
    description:
      "We turn physical spaces into brand cathedrals. If the room doesn't feel your energy, the event didn't happen. We create moments that people talk about for years.",
    href: "/services/events",
    icon: HiOutlineShoppingBag,
  },
  {
    title: "THE CINEMA - Photo & Video",
    description:
      "If it isn't premium, it isn't us. We capture your brand in high-definition power. Cinematic visuals that make your competitors look like amateurs.",
    href: "/services/cinema",
    icon: HiOutlineRectangleStack,
  },
];

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="The Arsenal"
        title="The 4 Core Pillars: What We Do"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Four integrated pillars engineered to sharpen strategy, amplify
          visibility, and scale your brand into a market-leading force.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>

          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <li key={service.title} className="group mt-10 first:mt-0">
                  <FadeIn>
                    <div
                      className={
                        index === 0
                          ? "pt-0"
                          : "border-t border-brand-sage/25 pt-10"
                      }
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blush-light/60 text-brand-espresso">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-display uppercase text-2xl font-semibold tracking-tight text-brand-espresso">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-brand-espresso/72">
                            {service.description}
                          </p>
                          <Link
                            href={service.href}
                            className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-espresso transition hover:text-brand-rose active:scale-[0.98]"
                          >
                            Explore service
                            <HiArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
