"use client";

import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import { useInViewAnimation } from "../hooks/use-in-view";

export function Projects() {
  const projects = [
    {
      title: "Gasspace",
      description: "Advanced Social Media Platform",
      image: "images/gasspace.png",
      tags: ["React", "Redux Toolkit Query", "Tailwind CSS"],
      features: [
        "Posts, likes, comments, shares",
        "User authentication & profiles",
        "Follow system & notifications",
        "Full CRUD operations",
      ],
      links: {
        github: "https://github.com/omargad2211/gasspace.git",
        live: "https://gasspace.vercel.app/",
      },
    },
    {
      title: "CineScope",
      description: "Movie Discovery Website",
      image: "images/cinescope.png",
      tags: [
        "React",
        "Redux Toolkit Query",
        "Tailwind CSS",
        "Framer Motion",
        "Swiper.js",
      ],
      features: [
        "Trending movie browsing",
        "Search functionality",
        "Detailed movie pages",
        "Interactive UI",
      ],
      links: {
        github: "https://github.com/omargad2211/Cinescope.git",
        live: "https://cinescope-ten.vercel.app/",
      },
    },
    {
      title: "MetroMingle",
      description: "Blogging Platform",
      image: "images/metro.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      features: [
        "User authentication",
        "Post & profile creation",
        "Full CRUD operations",
        "Dynamic content updates",
      ],
      links: {
        github: "https://github.com/omargad2211/MetroMingle",
        live: "https://metro-mingle.vercel.app/",
      },
    },
    {
      title: "Prime Care",
      description: "Pharmacy E-Commerce Platform",
      image: "/images/prime.png",
      tags: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "React Flowbite",
        "Redux Toolkit",
      ],
      features: [
        "Product listing",
        "Search functionality",
        "User authentication",
        "Secure checkout",
      ],
      links: {
        github: "https://github.com/prime-care/prime-care",
        live: "#",
      },
    },
  ];

  const { ref, hasAnimated } = useInViewAnimation();

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
        transition={{ staggerChildren: 0.2 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white px-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/20 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                    >
                      <Link className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 group-hover:hidden">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
