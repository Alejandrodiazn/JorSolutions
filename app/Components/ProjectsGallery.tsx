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
  sections: SectionProps[];
};

export type ProjectsGalleryProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ProjectsGallery = (props: ProjectsGalleryProps) => {
  const { sections } = {
    ...ProjectsGalleryDefaults,
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

  const groupedSections = [];
  for (let i = 0; i < sections.length; i += 2) {
    groupedSections.push(sections.slice(i, i + 2));
  }

  return (
    <section>
      <Carousel setApi={setApi} opts={options} className="overflow-hidden">
        <CarouselContent className="ml-0">
          {groupedSections.map((group, index) => (
            <CarouselItem key={index} className="relative pl-0">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
                {group.map((section, secIndex) => (
                  <div key={secIndex} className="rounded-md overflow-hidden">
                    <div>
                      <img src={section.image.src} alt={section.image.alt} />
                    </div>
                    <div className="bg-project-gray-gradient p-12 flex flex-col">
                      <div className="bg-secondary px-8 py-1 flex mb-3 md:mb-4 w-fit h-fit">
                        <p className=" font-semibold ">{section.tagline}</p>
                      </div>
                      <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                        {section.heading}
                      </h3>
                      <p className="mt-5 md:mt-6">{section.description}</p>
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
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-mt-8 ml-8 hidden bg-white lg:flex" />
        <CarouselNext className="-mt-8 mr-8 hidden bg-white lg:flex" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          {groupedSections.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx(
                "relative mx-[3px] inline-block size-2 rounded-full",
                current === index + 1 ? "bg-white" : "bg-white/40",
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export const ProjectsGalleryDefaults: ProjectsGalleryProps = {
  sections: [
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      tagline: "Etiqueta",
      heading: "Nombre del Proyecto",
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
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
          alt: "Placeholder image 1",
        },
        tagline: "Etiqueta",
        heading: "Nombre del Proyecto",
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
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
          alt: "Placeholder image 1",
        },
        tagline: "Etiqueta",
        heading: "Nombre del Proyecto",
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
    // Puedes agregar más secciones aquí
  ],
};

ProjectsGallery.displayName = "ProjectsGallery";
