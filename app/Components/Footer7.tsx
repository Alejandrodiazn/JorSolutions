type ImageProps = {
    url?: string;
    src: string;
    alt?: string;
  };
  
  type Links = {
    title: string;
    url: string;
  };
  
  type ColumnLinks = {
    links: Links[];
  };
  
  type FooterLink = {
    title: string;
    url: string;
  };
  
  type Props = {
    logo: ImageProps;
    columnLinks: ColumnLinks[];
    footerText: string;
    footerLinks: FooterLink[];
  };
  
  export type Footer7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Footer7 = (props: Footer7Props) => {
    const { logo, footerText, columnLinks, footerLinks } = {
      ...Footer7Defaults,
      ...props,
    } as Props;
    return (
      <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-gray-footer">
        <div className="container">
          <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
            <a href={logo.url} className="mb-8">
              <img src={logo.src} alt={logo.alt} className="inline-block" />
            </a>
            {columnLinks.map((column, index) => (
              <ul
                key={index}
                className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
              >
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="font-semibold text-white/90">
                    <a href={link.url} className="focus-visible:outline-none">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="h-px w-full bg-white/50" />
          <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
            <p className="mt-8 md:mt-0 text-white/80">{footerText}</p>
            <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
              {footerLinks.map((link, index) => (
                <li key={index} className="underline decoration-white underline-offset-1 text-white/80">
                  <a href={link.url} className="focus-visible:outline-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export const Footer7Defaults: Footer7Props = {
    logo: {
      url: "#",
      src: "jor-logo-white.png",
      alt: "Logo image",
    },
    columnLinks: [
      {
        links: [
          { title: "Misión", url: "/#mision" },
          { title: "Conócenos", url: "/#conocenos" },
          { title: "Cleanwatt", url: "/#cleanwatt" },
          { title: "Infraestructura", url: "/#Infraestructura" },
          { title: "Proyectos", url: "/#proyectos" },
        ],
      },
    ],
    footerText: "© 2024 Troost. All rights reserved.",
    footerLinks: [
      { title: "Privacy Policy", url: "#" },
      { title: "Terms of Service", url: "#" },
      { title: "Cookies Settings", url: "#" },
    ],
  };
  
  Footer7.displayName = "Footer7";
  