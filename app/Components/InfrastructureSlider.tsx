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

export type InfrastructureSliderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const InfrastructureSlider = (props: InfrastructureSliderProps) => {
  const { heading, description, sections } = {
    ...InfrastructureSliderDefaults,
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
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Carousel setApi={setApi} opts={options}>
          <CarouselContent>
            {sections.map((section, index) => (
              <CarouselItem key={index} className="basis-auto pr-2 md:pr-4 max-w-[335px] md:max-w-[640px]">
                <div className="rounded-md overflow-hidden">
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white p-12 flex flex-col items-center justify-center h-full">
                    <h3 className="text-3xl font-bold mb-4 text-center">{section.heading}</h3>
                    <p className="text-lg mb-6 text-center">{section.tagline}</p>
                    <img 
                      src={section.image.src} 
                      alt={section.image.alt} 
                      className="md:max-h-[188px] object-cover w-full" 
                    />
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
                    "bg-black": current === index + 1,
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

export const InfrastructureSliderDefaults: InfrastructureSliderProps = {
  heading: "Conoce nuestros proyectos",
  description: "Descubre cómo integramos diseño, simulación, manufactura, integración y control para ofrecer soluciones energéticas avanzadas y sostenibles.",
  sections: [
    {
      image: {
        src: "/images/infraestructura1.png",
        alt: "Imagen de infraestructura 1",
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
        src: "/images/infraestructura2.png",
        alt: "Imagen de infraestructura 2",
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

InfrastructureSlider.displayName = "InfrastructureSlider";
