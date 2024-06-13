type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    logos: ImageProps[];
  };
  
  export type Logo3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Logo3 = (props: Logo3Props) => {
    const { heading, logos } = {
      ...Logo3Defaults,
      ...props,
    } as Props;
    return (
      <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-black">
        <div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
          <h1 className="text-white text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
            {heading}
          </h1>
        </div>
        <div className="flex items-center pt-[28px] md:pt-0">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex shrink-0 animate-loop-horizontally items-center">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    className="mx-[28px] max-h-12 shrink-0 md:mx-10 md:max-h-14"
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            ))}
        </div>
      </section>
    );
  };
  
  export const Logo3Defaults: Logo3Props = {
    heading: "Cónoce a nuestros clientes",
    logos: [
      { src: "./section-logos/logo1.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo2.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo3.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo4.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo5.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo6.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo7.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo8.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo9.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo10.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo11.png", alt: "Ciaspe logo" },
      { src: "./section-logos/logo12.png", alt: "Ciaspe logo" },
    ],
  };
  
  Logo3.displayName = "Logo3";
  