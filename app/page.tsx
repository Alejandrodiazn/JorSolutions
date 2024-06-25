"use client";
import Image from "next/image";
import { Header5, Header5Defaults } from "./Components/Header5";
import { Navbar3, Navbar3Defaults } from "./Components/Navbar3";
import { Layout38, Layout38Defaults } from "./Components/Layout38";
import { Logo3, Logo3Defaults } from "./Components/Logos";
import { Footer7, Footer7Defaults } from "./Components/Footer7";
import { Gallery13 } from "./Components/Gallery";
import { Layout131, Layout131Defaults} from "./Components/Cards";
import { Section2cols, Section2colsDefaults } from "./Components/Layout2col";
import { ServicioSlider } from "./Components/serviciosslider";
import { ProjectsGallery } from "./Components/ProjectsGallery";
import { Gallery21, Gallery21Defaults } from "./Components/Gallery21";
import { CarouselCards, CarouselCardsDefaults } from "./Components/CarouselCards";
import { InfrastructureSlider, InfrastructureSliderDefaults } from "./Components/InfrastructureSlider";

export default function Home() {
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

    </>
  );
}
