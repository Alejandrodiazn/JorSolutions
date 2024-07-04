"use client";
import { useState } from "react";

import { Header5, Header5Defaults } from "./Components/Header5";
import { Navbar3, Navbar3Defaults } from "./Components/Navbar3";
import { Layout38, Layout38Defaults } from "./Components/Layout38";
import { Logo3, Logo3Defaults } from "./Components/Logos";
import { Footer7, Footer7Defaults } from "./Components/Footer7";
import { Section2cols, Section2colsDefaults } from "./Components/Layout2col";
import { ServicioSlider } from "./Components/serviciosslider";
import { CarouselCards, CarouselCardsDefaults } from "./Components/CarouselCards";
import { InfrastructureSlider, InfrastructureSliderDefaults } from "./Components/InfrastructureSlider";
import { ContactModal1, ContactModal1Defaults } from "./Components/modal";


export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <Navbar3 {...Navbar3Defaults}/>
      <Header5 {...Header5Defaults}/>
      <ServicioSlider/>
      <Logo3 {...Logo3Defaults}/>
      <Layout38 {...Layout38Defaults}/>
      <Section2cols {...Section2colsDefaults}/>
      <CarouselCards {...CarouselCardsDefaults}/>
      <InfrastructureSlider {...InfrastructureSliderDefaults} />
      <Footer7 {...Footer7Defaults}/>
      <ContactModal1 {...ContactModal1Defaults}/>
    </>
  );
}
