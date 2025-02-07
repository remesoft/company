import React from "react";
import Accordion from "../components/Accordion";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroDivider from "../components/HeroDivider";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Header>
        <Hero />
        <HeroDivider />
      </Header>
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      {/* <Team /> */}
      <ContactForm />
      <Accordion />
      <Footer />
    </>
  );
}
