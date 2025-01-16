import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { useInViewAnimation } from "../hooks/use-in-view";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTestinglibrary,
  SiMui,
} from "react-icons/si";
import { TbForms } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { BsCheck2Square } from "react-icons/bs";

export function Hero() {
  const { ref, hasAnimated } = useInViewAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger timing
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 }, // Reduced distance for smoother entry
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Shorter duration for faster animation
        ease: "easeOut", // Smooth easing
      },
    },
  };

  const title = "Hi, I'm Omar — Crafting Modern & Responsive Web Experiences.";

  const technologies = [
    {
      title: "JavaScript",
      icon: <FaJs className="text-yellow-500 text-3xl mx-auto" />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-3xl mx-auto" />,
    },
    {
      title: "HTML5",
      icon: <FaHtml5 className="text-orange-600 text-3xl mx-auto" />,
    },
    {
      title: "CSS/SCSS",
      icon: <FaCss3Alt className="text-blue-600 text-3xl mx-auto" />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-500 text-3xl mx-auto" />,
    },
    {
      title: "React.js",
      icon: <FaReact className="text-blue-400 text-3xl mx-auto" />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs className="text-gray-800 text-3xl mx-auto" />,
    },
    {
      title: "Redux Toolkit",
      icon: <SiRedux className="text-purple-500 text-3xl mx-auto" />,
    },
    {
      title: "Redux Toolkit Query",
      icon: <SiRedux className="text-purple-500 text-3xl mx-auto" />,
    },
    {
      title: "React Hook Form",
      icon: <TbForms className="text-red-500 text-3xl mx-auto" />,
    },
    {
      title: "Git/GitHub",
      icon: <FaGitAlt className="text-orange-500 text-3xl mx-auto" />,
    },
    {
      title: "React Native",
      icon: <FaReact className="text-blue-400 text-3xl mx-auto" />,
    },
    {
      title: "Material UI",
      icon: <SiMui className="text-blue-500 text-3xl mx-auto" />,
    },
    {
      title: "Unit Test",
      icon: <SiTestinglibrary className="text-red-500 text-3xl mx-auto" />,
    },
    {
      title: "Agile Methodology",
      icon: <RiTeamLine className="text-green-500 text-3xl mx-auto" />,
    },
    {
      title: "UI/UX Principles",
      icon: <BsCheck2Square className="text-gray-700 text-3xl mx-auto" />,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        className="container mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src="\images\profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-2 border-gray-200"
          />
        </motion.div>

        <motion.h1
          variants={containerVariants}
          className="text-4xl font-bold mb-6 text-black"
        >
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
          >
            Latest Work
            <ArrowRight className="ml-2" />
          </a>
        </motion.div>

        {hasAnimated && (
          <motion.div variants={itemVariants} className="mt-16">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 0,
              }}
              speed={1800}
              loop={true}
              className="grayscale opacity-70"
            >
              {technologies.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="text-sm font-medium text-gray-600 text-center">
                    {tech.icon}
                    <p>{tech.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
