import React from "react";
import Accordion from "../components/Accordion";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <ContactForm />
      <Accordion />
    </>
  );
}
