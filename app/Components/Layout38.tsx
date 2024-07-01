import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    image: ImageProps;
    buttons: ButtonProps[];
  };
  
  export type Layout38Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout38 = (props: Layout38Props) => {
    const { heading, description, image, buttons } = {
      ...Layout38Defaults,
      ...props,
    } as Props;
    return (
      <section className="relative px-[5%]">
        <div className="container mx-auto">
          <div className="flex items-center py-16 md:py-24 lg:py-28">
            <div className="max-w-md mx-auto text-center">
              <div className="mb-5 md:mb-6 flex justify-center">
                <img src="cleanwatt-logo.svg" alt="" />
              </div>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl hidden">
                {heading}
              </h3>
              <p className="text-base text-text-alternative md:text-md">{description}</p>
              <div className="mt-6 gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                  className="bg-primary text-white border-none"
                >
                  {button.title}
                </Button>
              ))}
            </div>
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
      buttons: [{ title: "Solicitar cotización" }],
      image: {
      src: "Cleanwatt.jpg",
      alt: "Placeholder image",
    },
  };
  
  Layout38.displayName = "Layout38";
  