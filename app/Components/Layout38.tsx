type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    image: ImageProps;
  };
  
  export type Layout38Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout38 = (props: Layout38Props) => {
    const { heading, description, image } = {
      ...Layout38Defaults,
      ...props,
    } as Props;
    return (
      <section className="relative px-[5%]">
        <div className="container">
          <div className="flex items-center py-16 md:py-24 lg:py-28">
            <div className="max-w-md">
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h3>
              <p className="text-base text-text-alternative md:text-md">{description}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </section>
    );
  };
  
  export const Layout38Defaults: Layout38Props = {
    heading: "Cleanwatt",
    description:
      "En CleanWatt, creemos que la tecnología más limpia es la que no gastas. Nos dedicamos al desarrollo de tecnologías para la generación de energía limpia y la eficiencia energética. Desde estudios exhaustivos de eficiencia hasta la instalación de sistemas avanzados de generación eléctrica, estamos comprometidos con la creación de un mundo más sostenible.",
    image: {
      src: "Cleanwatt.jpg",
      alt: "Placeholder image",
    },
  };
  
  Layout38.displayName = "Layout38";
  