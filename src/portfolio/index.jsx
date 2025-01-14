"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import MyJourney from "./components/MyJourney ";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setIsLoaded(true)}
      className="min-h-screen bg-[#F5F5F5] text-black"
    >
      <Header />
      <main>
        <Hero isLoaded={isLoaded} />
        <Services isLoaded={isLoaded} />
        <MyJourney isLoaded={isLoaded} />
        <Projects isLoaded={isLoaded} />
        <Contact isLoaded={isLoaded} />
      </main>
      <Footer />
    </motion.div>
  );
}
