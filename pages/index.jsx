import Head from "next/head";
import Header from "../components/Header";
import {ChakraProvider, Container} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Map from "../components/Map";

import Presentation from "../components/Presentation";

import styles from "../styles/AudioPlayer.module.scss";
import AboutUs from "../components/AboutUs";
import CardsInstruments from "../components/CardsInstruments";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <Head>
        <title>Escuela Betel | 2022</title>
      </Head>
      <Header />
      <Presentation />
      <AboutUs />
      <CardsInstruments />
      <Contact />
      <Footer />
    </>
  );
}
