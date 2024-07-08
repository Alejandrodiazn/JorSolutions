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

type SectionProps = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt?: string;
  };
};

type Props = {
  sections: SectionProps[];
};

export type ServicioSliderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ServicioSlider = (props: ServicioSliderProps) => {
  const { sections } = {
    ...ServicioSliderDefaults,
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
    <section id="conocenos">
      <Carousel setApi={setApi} opts={options} className="overflow-hidden">
        <CarouselContent className="ml-0">
          {sections.map((section, index) => (
            <CarouselItem key={index} className="relative min-h-full pl-0">
              <section className="relative flex items-center justify-center min-h-[35rem] px-[5%]">
                <div className="container mx-auto">
                  <div className="flex items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md mx-auto text-center">
                      <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                        {section.heading}
                      </h3>
                      <p className="text-base text-text-alternative md:text-md">{section.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 -z-10">
                  <img src={section.image.src} className="size-full object-cover" alt={section.image.alt} />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-mt-8 ml-8 hidden bg-trasparent text-primary lg:flex border-none scale-150"/>
        <CarouselNext className="-mt-8 mr-8 hidden bg-transparent lg:flex border-none text-primary scale-150" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx(
                "relative mx-[3px] inline-block size-2 rounded-full",
                current === index + 1 ? "bg-primary" : "bg-white/40",
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export const ServicioSliderDefaults: ServicioSliderProps = {
  sections: [
    {
      heading: "Diseño",
      description:
        "Transformando ideas en innovación tangible. Descubre cómo nuestro ingenioso diseño impulsa el progreso.",
      image: {
        src: "./servicios/diseño.jpg",
        alt: "Placeholder image",
      },
    },
    {
        heading: "Manofactura",
        description:
          "Donde la precisión y la eficiencia se encuentran. Desde el concepto hasta la realidad, llevamos tus proyectos al siguiente nivel.",
        image: {
          src: "./servicios/manofactura.jpg",
          alt: "Placeholder image",
        },
      },
      {
        heading: "Simulación",
        description:
          "Predicción precisa, resultados óptimos. Descubre cómo nuestras simulaciones avanzadas garantizan el éxito de tus proyectos desde el principio.",
        image: {
          src: "./servicios/simulacion.jpg",
          alt: "Placeholder image",
        },
      },
      {
        heading: "Integración",
        description:
          "Uniendo tecnologías para un futuro más brillante. Nuestro enfoque integral garantiza una implementación sin problemas de soluciones innovadoras.",
        image: {
          src: "./servicios/integracion.jpg",
          alt: "Placeholder image",
        },
      },
      {
        heading: "Control",
        description:
          "Potenciando el rendimiento con control preciso. Optimiza tus procesos y maximiza la eficiencia con nuestras soluciones de control a medida.",
        image: {
          src: "./servicios/control.jpg",
          alt: "Placeholder image",
        },
      },
    // Puedes agregar más secciones aquí
  ],
};

ServicioSlider.displayName = "ServicioSlider";
