"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Input,
  Label,
  Textarea,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
};

export type ContactModal1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ContactModal1 = (props: ContactModal1Props) => {
  const { heading, description, button } = {
    ...ContactModal1Defaults,
    ...props,
  } as Props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, message, acceptTerms });
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.modal-button');
    const openModal = () => setIsOpen(true);

    buttons.forEach(button => button.addEventListener('click', openModal));

    return () => {
      buttons.forEach(button => button.removeEventListener('click', openModal));
    };
  }, []);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center relative">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="hidden">Solicitar cotización</Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="bg-black/25" />
            <DialogContent className="block h-screen overflow-y-scroll bg-black px-[5%] py-16 md:h-auto md:max-h-[80vh] md:w-[90%] md:px-12 md:py-16 md:data-[state=open]:duration-300 md:data-[state=open]:animate-in md:data-[state=closed]:animate-out md:data-[state=closed]:fade-out-0 md:data-[state=open]:fade-in-0 md:data-[state=closed]:slide-out-to-left-1/2 md:data-[state=open]:slide-in-from-left-1/2 lg:w-full lg:max-w-lg lg:p-16">
              <img src="./deco/modal.svg" alt="" className="w-auto absolute -z-10 opacity-60"/>
              <div className="mb-8 text-center md:mb-10 lg:mb-12">
                <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                  {heading}
                </h2>
                <p className="md:text-md">{description}</p>
              </div>
              <form className="grid gap-6" onSubmit={handleSubmit}>
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2">
                    Nombre
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    className="text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2">
                    Número
                  </Label>
                  <Input
                    className="text-black"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="message" className="mb-2">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe aquí..."
                    className="min-h-[11.25rem] overflow-auto text-black"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={setAcceptTerms}
                    className="mr-2 border-white"
                  />
                  <Label htmlFor="terms" className="cursor-pointer text-sm">
                    Acepto los{" "}
                    <a
                      className="text-white underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      términos y condiciones
                    </a>
                  </Label>
                </div>
                <div className="text-center">
                  <Button className="bg-primary text-white border-none" {...button}>{button.title}</Button>
                </div>
              </form>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </section>
  );
};

export const ContactModal1Defaults: ContactModal1Props = {
  heading: "Solicitar cotización",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "Solicitar cotización" },
};

ContactModal1.displayName = "ContactModal1";
