"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  heading: string;
  description: string;
  sections: SectionProps[];
};

export type CarouselCardsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CarouselCards = (props: CarouselCardsProps) => {
  const { heading, description, sections } = {
    ...CarouselCardsDefaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const options = {
    loop: true,
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 relative bg-black z-0">
      <img className="absolute top-0 right-0 w-56 lg:w-96 md:w-64 z-10 " src="./deco/deco-proyectos.svg" alt="" />
      <div className="container z-20 relative">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="text-white mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="text-white md:text-md">{description}</p>
        </div>
        <Carousel setApi={setApi} opts={options}>
          <CarouselContent>
            {sections.map((section, index) => (
              <CarouselItem key={index} className="basis-auto pr-2 md:pr-4 max-w-[335px] md:max-w-[640px]">
                <div className="rounded-md overflow-hidden">
                  <div>
                    <img src={section.image.src} alt={section.image.alt} className="lg:max-h-[360px] md:max-h-[200px] object-cover w-full"/>
                  </div>
                  <div className="bg-project-gray-gradient p-12 flex flex-col">
                    <div className="bg-secondary px-8 py-1 flex mb-3 md:mb-4 w-fit h-fit">
                      <p className="font-semibold text-white">{section.tagline}</p>
                    </div>
                    <h3 className="mb-5 lg:text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl text-xl">
                      {section.heading}
                    </h3>
                    <p className="mt-5 md:mt-6 text-white">{section.description}</p>
                    <div className="mt-6 items-center gap-4 md:mt-8 hidden">
                      {section.buttons.map((button, buttonIndex) => (
                        <Button
                          key={buttonIndex}
                          variant={button.variant}
                          size={button.size}
                          iconRight={button.iconRight}
                          iconLeft={button.iconLeft}
                        >
                          {button.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-[38px] flex items-center justify-between">
            <div className="mt-4 flex w-full items-start justify-start">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-secondary": current === index + 1,
                    "bg-neutral-light": current !== index + 1,
                  })}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export const CarouselCardsDefaults: CarouselCardsProps = {
  heading: "Conoce nuestros proyectos",
  description: "Descubre cómo integramos diseño, simulación, manufactura, integración y control para ofrecer soluciones energéticas avanzadas y sostenibles.",
  sections: [
    {
      image: {
        src: "./proyectos/maquinados.jpg",
        alt: "Placeholder image 1",
      },
      tagline: "Diseño",
      heading: "MAQUINADOS MRO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
    {
      image: {
        src: "./proyectos/manofactura.jpg",
        alt: "Placeholder image 2",
      },
      tagline: "Simulación",
      heading: "MANUFACTURA ADITIVA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
  ],
};

CarouselCards.displayName = "CarouselCards";
