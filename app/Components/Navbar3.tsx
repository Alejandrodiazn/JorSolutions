"use client";

import { useEffect, useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar3 = (props: Navbar3Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar3Defaults,
    ...props,
  } as Props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <nav className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between backdrop-blur bg-black/50 fixed z-50 px-[5%] md:min-h-18">
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <span key={index} className="my-[3px] h-0.5 w-6 bg-white lg:hidden" />
          ))}
      </button>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-border-primary lg:bg-transparent lg:backdrop-blur-none bg-black/50 backdrop-blur px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <a href={logo.url} className="mb-8 mt-10 flex flex-shrink-0 lg:hidden">
            <img src={logo.src} alt={logo.alt} />
          </a>
          {navLinks.map((navLink, index) => (
            <div key={index} className="w-full lg:w-auto">
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu navLink={navLink} isMobile={isMobile} />
              ) : (
                <a
                  href={navLink.url}
                  className="relative block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-2 lg:text-base"
                >
                  {navLink.title}
                </a>
              )}
            </div>
          ))}
          <div className="mt-6 lg:hidden">
            {buttons.map((button, index) => (
              <Button key={index} variant={button.variant} size={button.size} className="modal-button w-full bg-primary text-white border-none">
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <a href={logo.url} className="flex min-h-16 flex-shrink-0 items-center">
        <img src={logo.src} alt={logo.alt} />
      </a>
      <div className="hidden lg:flex min-h-16 items-center justify-end gap-x-4">
        <div>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              size={button.size}
              className="modal-button px-4 py-1 md:px-6 md:py-2 bg-primary text-white border-none"
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-md focus-visible:outline-none  lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <AnimatePresence>
          <motion.span
            animate={isDropdownOpen ? "rotated" : "initial"}
            variants={{
              rotated: { rotate: 180 },
              initial: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <RxChevronDown />
          </motion.span>
        </AnimatePresence>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            initial="close"
            exit="close"
            animate={isDropdownOpen ? "open" : "close"}
            className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                key={index}
                href={subMenuLink.url}
                className="block py-3 pl-[5%] text-md focus-visible:outline-none lg:py-2 lg:pl-4 lg:pr-8 lg:text-left lg:text-base"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar3Defaults: Navbar3Props = {
  logo: {
    url: "/#home",
    src: "jor-logo-white.png",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Misión", url: "/#mision" },
    { title: "Conócenos", url: "/#conocenos" },
    { title: "Cleanwatt", url: "/#cleanwatt" },
    { title: "Proyectos", url: "/#proyectos" },
    { title: "Infraestructura", url: "/#infraestructura" },
  ],
  buttons: [
    {
      title: "Solicitar cotización",
      size: "sm",
    },
  ],
};

Navbar3.displayName = "Navbar3";
