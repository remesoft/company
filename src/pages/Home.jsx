import React from "react";
import Accordion from "../components/Accordion";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Services />
      <ContactForm />
      <Accordion />
    </>
  );
}
