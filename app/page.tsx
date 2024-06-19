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

export default function Home() {
  return (
    <>
      <Navbar3 {...Navbar3Defaults}/>
      <Header5 {...Header5Defaults}/>
      <ServicioSlider/>
      <Logo3 {...Logo3Defaults}/>
      <Layout38 {...Layout38Defaults}/>
      <Section2cols {...Section2colsDefaults}/>
      <Layout131 {...Layout131Defaults}/>
      <Footer7 {...Footer7Defaults}/>

    </>
  );
}
