import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Accordion from "../components/Accordion";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroDivider from "../components/HeroDivider";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  const location = useLocation(); // React Router hook to get the current path
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const scrollToHash = () => {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100); // Ensure elements are rendered before scrolling
    };

    scrollToHash(); // Run on mount
    window.addEventListener("hashchange", scrollToHash); // Listen for hash changes

    return () => window.removeEventListener("hashchange", scrollToHash); // Cleanup
  }, [location]); // Run effect whenever location changes

  return (
    <section className={isDarkMode ? "dark" : ""}>
      <Header darkMode={isDarkMode} handleDarkMode={handleDarkMode}>
        <Hero />
      </Header>
      <HeroDivider />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <ContactForm />
      <Accordion />
      <Footer />
      </section>
  );
}
