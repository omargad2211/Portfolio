"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Zap } from "lucide-react";
import { useInViewAnimation } from "../hooks/use-in-view";

export function Services() {
  const { ref, hasAnimated } = useInViewAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React and modern web technologies.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Creating seamless experiences across all devices with responsive design principles.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, accessibility, and search engine visibility.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
