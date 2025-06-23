import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative scroll-smooth bg-[#000319] bg-[url('/grid-pattern.png')] bg-[length:600px_600px] bg-fixed bg-repeat">
      <img
        src="/spotlight-left.png"
        alt="spotlight-left"
        className="absolute top-0 left-0 w-[150px] md:w-[250px] lg:w-[500px]"
      />
      <img
        src="/spotlight-right.png"
        alt="spotlight-right"
        className="absolute top-0 right-0 w-[150px] md:w-[250px] lg:w-[500px]"
      />
      <main>
        <Section>
          <Hero />
        </Section>
        <section id="about">
          <Section>
            <AboutMe />
          </Section>
        </section>
        <section id="projects">
          <Section>
            <Projects />
          </Section>
        </section>
        <section id="testimonials">
          <Section>
            <Testimonials />
          </Section>
        </section>
        <Section>
          <Experience />
        </Section>
        <section id="contact">
          <Section>
            <Contact />
          </Section>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
