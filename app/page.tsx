import Image from "next/image";
import { Header5, Header5Defaults } from "./Components/Header5";
import { Navbar3, Navbar3Defaults } from "./Components/Navbar3";
import { Layout38, Layout38Defaults } from "./Components/Layout38";
import { Logo3, Logo3Defaults } from "./Components/Logos";
import { Footer7 } from "./Components/Footer7";
import { Gallery13 } from "./Components/Gallery";
import { Layout131 } from "./Components/Cards";


export default function Home() {
  return (
    <>
      <Header5/>
      <Logo3/>
      <Layout38/>
      <Layout131/>
      <Footer7/>
    </>
  );
}
