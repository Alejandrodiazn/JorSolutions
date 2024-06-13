import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header5 = (props: Header5Props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  } as Props;
  return (
    <header className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
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
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export const Header5Defaults: Header5Props = {
  heading: "Ingeniería: Diseño, simulación, manufactura e integración .SPECC",
  description:
    "Donde la innovación y la tecnología se unen para impulsar un mañana más sostenible. Descubre cómo nuestras soluciones en energías renovables, industrial y desarrollo sustentable pueden llevar tu empresa hacia al siguiente nivel.",
  buttons: [{ title: "Solicitar cotización" }],
  image: {
    src: "hero-image-2.jpg",
    alt: "Placeholder image",
  },
};

Header5.displayName = "Header5";
