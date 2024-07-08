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
    <section id="infraestructura" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 relative z-0 bg-black">
      <img className="absolute top-0 left-0 w-56 lg:w-96 md:w-64 z-10 " src="./deco/deco-green.svg" alt="" />
      <div className="container relative z-20">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">{heading}</h2>
          <p className="md:text-md text-white">{description}</p>
        </div>
        <Carousel setApi={setApi} opts={options}>
          <CarouselContent>
            {sections.map((section, index) => (
              <CarouselItem key={index} className="basis-auto pr-2 md:pr-4 max-w-[335px] md:max-w-[640px]">
                <div className="rounded-md overflow-hidden h-full">
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white p-12 flex flex-col items-center justify-center h-full">
                    <h3 className="lg:text-3xl text-xl font-bold mb-4 text-center">{section.heading}</h3>
                    <p className="text-lg mb-6 text-center">{section.tagline}</p>
                    <img 
                      src={section.image.src} 
                      alt={section.image.alt} 
                      className="lg:max-h-[300px]  md:max-h-[188px] object-contain w-full" 
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

export const InfrastructureSliderDefaults: InfrastructureSliderProps = {
  heading: "Conoce nuestros proyectos",
  description: "Descubre cómo integramos diseño, simulación, manufactura, integración y control para ofrecer soluciones energéticas avanzadas y sostenibles.",
  sections: [
    {
      image: {
        src: "./maquinas/maquina3ejes.png",
        alt: "Imagen de infraestructura 1",
      },
      tagline: "Eje X 1000 mm,  Eje Y 600 mm,  Eje Z 600 mm",
      heading: "CENTRO DE  MAǪUINADO DE 3 EJES  VMC1000 II HISION",
      description:
        "Eje X 1000 mm,  Eje Y 600 mm,  Eje Z 600 mm",
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
        src: "/maquinas/FresadoraCNC.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Eje X 760 mm,  Eje Y 355 mm,  Eje Z 400 mm",
      heading: "Fresadora CNC de  Consola VF3KM400  VIWA",
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
        src: "/maquinas/RectificadoraM618A.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Tamaño de la mesa 6″ x 18″  Rectificado longitudinal 18″  Rectificado transversal 6″",
      heading: "Rectificadora M618A (6″x18″) ARIES",
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
        src: "/maquinas/Fresadore10x.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Desplazamiento del husillo 127 mm, Desplazamiento longitudinal 914 mm, Desplazamiento transversal 406 mm",
      heading: "FRESADORA  10X54PULG TM-3S Titanium",
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
        src: "/maquinas/SierraSC.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "",
      heading: "Sierra cinta horizontal  SC-712 TITANIUM",
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
        src: "/maquinas/AfiladorPP.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "MOTOR 1/4 HP, 220V, 60  HZ PESO 46 KG 46 KGS",
      heading: "Afilador PP-U3  GRINDAF",
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
        src: "/maquinas/FresadoraM10.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "CARRERA LONGITUDINAL 920 mm, CARRERA TRANSVERSAL 420 mm",
      heading: "FRESADORA MESA 10” X  54” X6325 KENTA",
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
        src: "/maquinas/tornoc063.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Distancia entre puntos: 1000 mm Diámetro del husillo: 38 mm",
      heading: "TORNO PARALELO C0636A-1000 MCLANE",
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
        src: "/maquinas/Mlaser.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "",
      heading: "MARCADOR LASER PL-50S",
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
        src: "/maquinas/lasera3.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Área de operación 3048mm*1524mm Potencia de salida de láser	6kW/3kW/1.5kW",
      heading: "Máquina de corte laser A3-OO-GB BODOR",
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
        src: "/maquinas/form3.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Gracias a dos Light Processing Unit, esta  impresora de resina de gran tamaño ofrece  precisión y detalles uniformes a lo largo de  toda la base de impresión.",
      heading: "Impresora  Form 3+",
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
        src: "/maquinas/form3l.png",
        alt: "Imagen de infraestructura 2",
      },
      tagline: "Ofrece tecnología y asistencia líderes en el  sector para que puedas pasar menos  tiempo solucionando problemas y más  tiempo imprimiendo.",
      heading: "Impresora 3D  Form 3L",
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
