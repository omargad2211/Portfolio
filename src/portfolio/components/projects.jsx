"use client";

import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import { useInViewAnimation } from "../hooks/use-in-view";

export function Projects() {
  const projects = [
    {
      title: "CineScope",
      description: "Movies website",
      image: "images/cinescope-mockup.png",
      tags: [
        "React",
        "Redux Toolkit Query",
        "Tailwind CSS",
        "framer motion",
        "swiper.js",
      ],
      links: {
        github: "https://github.com/omargad2211/Cinescope.git",
        live: "https://cinescope-ten.vercel.app/ ",
      },
    },
    {
      title: "MetroMingle",
      description: "Blogging website",
      image: "images/metro.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      links: {
        github: "https://github.com/omargad2211/MetroMingle",
        live: "https://metro-mingle.vercel.app/",
      },
    },
    {
      title: " Depo Web Company Website",
      description:
        "Official company website showcasing services and portfolio.",
      image: "/images/depo.png",
      tags: [
        "React",
        "django",
        "tailwind css",
        "framer motion",
        "swiper.js",
        "i18next",
        "react hook form",
      ],
      links: {
        github: "#",
        live: "https://depowebeg.com/",
      },
    },
    {
      title: " Prime Care",
      description: "Pharmacy E-commerce website",
      image: "/images/prime.png",
      tags: [
        "React",
        "Firebase",
        "tailwind css",
        "react flowbite",
        "redux toolkit",
      ],
      links: {
        github: "https://github.com/prime-care/prime-care",
        live: "#",
      },
    },
  ];

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

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              variants={itemVariants}
              className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.links.github}
                    className="p-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.links.live}
                    className="p-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
