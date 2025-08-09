import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ExternalLink,
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  Code2,
  Palette,
  Smartphone,
  Zap,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";
import emailjs from "emailjs-com";

// Custom Hooks
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const useInViewAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  return { ref, isInView };
};

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-light tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Omar Gad
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-black transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-neutral-200/50 mt-4 pt-4"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-neutral-600 hover:text-black transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Hero Section
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const mousePosition = useMousePosition();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 to-white">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src="images/profile.jpg"
                alt="Omar Gad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-neutral-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Crafting Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-600">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-neutral-600 mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Frontend Developer specializing in modern web technologies
          <br />
          and creating elegant user experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.a
            href="#work"
            className="group bg-neutral-900 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            className="group border border-neutral-300 text-neutral-900 px-8 py-4 rounded-full flex items-center gap-2 hover:border-neutral-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-neutral-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Services Section
const Services = () => {
  const { ref, isInView } = useInViewAnimation();

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React and modern web technologies.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user experiences with attention to detail and user-centered design.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications with React Native for seamless user experiences.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, accessibility, and search engine visibility.",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-neutral-900">
            What I Do
          </h2>
          <p className="text-xl text-neutral-600 font-light">
            Specialized services that bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-3xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/50 hover:border-neutral-300/50 transition-all duration-500 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 text-neutral-900">
                {service.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const { ref, isInView } = useInViewAnimation();

  const projects = [
    {
      title: "Gasspace",
      description: "Advanced Social Media Platform",
      image: "images/gasspace.png",
      tags: ["React", "Redux Toolkit", "Tailwind CSS"],
      category: "Social Platform",
      links: {
        github: "https://github.com/omargad2211/gasspace.git",
        live: "https://gasspace.vercel.app/",
      },
    },
    {
      title: "CineScope",
      description: "Movie Discovery Website",
      image: "images/cinescope.png",
      tags: ["React", "Redux Toolkit", "Framer Motion"],
      category: "Entertainment",
      links: {
        github: "https://github.com/omargad2211/Cinescope.git",
        live: "https://cinescope-ten.vercel.app/",
      },
    },
    {
      title: "MetroMingle",
      description: "Modern Blogging Platform",
      image: "images/metro.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "Content Platform",
      links: {
        github: "https://github.com/omargad2211/MetroMingle",
        live: "https://metro-mingle.vercel.app/",
      },
    },
  ];

  return (
    <section
      id="work"
      className="py-32 bg-gradient-to-br from-neutral-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-neutral-900">
            Featured Work
          </h2>
          <p className="text-xl text-neutral-600 font-light">
            A collection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white border border-neutral-200/50 hover:border-neutral-300/50 transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Github className="w-4 h-4 text-neutral-900" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-neutral-900" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-2 text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  const { ref, isInView } = useInViewAnimation();

  const journey = [
    {
      year: "2018",
      title: "Dentistry",
      description: "Started as a Dentist in healthcare",
    },
    {
      year: "2020",
      title: "Self-Learning",
      description: "Discovered programming through online resources",
    },
    {
      year: "2022",
      title: "ITI Program",
      description: "Enhanced technical skills through structured learning",
    },
    {
      year: "2023",
      title: "Depo Web",
      description: "First role as Frontend Developer",
    },
    {
      year: "2024",
      title: "Depx Company",
      description: "Advanced to React Native Development",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Redux Toolkit",
    "Tailwind CSS",
    "Framer Motion",
    "Firebase",
    "Git",
  ];

  return (
    <section id="about" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-neutral-900">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-neutral-600 font-light leading-relaxed mb-8">
              A passionate frontend developer with a unique journey from
              healthcare to technology. I combine analytical thinking from my
              medical background with creative problem-solving in web
              development.
            </p>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-light mb-12 text-center text-neutral-900">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neutral-300 to-neutral-100"></div>
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl border border-neutral-200/50">
                    <div className="text-sm text-neutral-500 mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-neutral-900 rounded-full"></div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-light mb-8 text-center text-neutral-900">
            Technologies I Love
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white rounded-full font-light"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.05 + 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const { ref, isInView } = useInViewAnimation();
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    emailjs
      .sendForm(
        "service_r339v3q",
        "template_19lqq9f",
        e.target,
        "WSSb5ojVuhYEeO7hy"
      )
      .then(
        (result) => {
          setFormStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "omargad7324@gmail.com",
      href: "mailto:omargad7324@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "omargad2211",
      href: "https://github.com/omargad2211",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Omar Gad",
      href: "https://www.linkedin.com/in/omar-gad-abdelwahhab/",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Egypt",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Let's Create Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-neutral-300 font-light">
            Ready to bring your ideas to life? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light mb-8">Get In Touch</h3>
            <p className="text-neutral-300 mb-8 font-light leading-relaxed">
              I'm always open to discussing new opportunities, creative
              projects, or just having a chat about technology and design.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">
                          {item.label}
                        </div>
                        <div className="text-white font-light">
                          {item.value}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="p-2 rounded-xl bg-white/10">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">
                          {item.label}
                        </div>
                        <div className="text-white font-light">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-white/30 transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-white text-neutral-900 rounded-2xl font-medium hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {formStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300"
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-400 font-light"
          >
            © {currentYear} Omar Gad. Crafted with passion.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 mt-4 md:mt-0"
          >
            <a
              href="https://github.com/omargad2211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-2"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-gad-abdelwahhab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:omargad7324@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors p-2"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neutral-300/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100, null],
            x: [null, Math.random() * 100 - 50, null],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-white text-neutral-900 relative overflow-x-hidden"
    >
      <FloatingElements />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-900 to-neutral-600 transform-gpu z-50"
        style={{
          scaleX: useTransform(useScroll().scrollYProgress, [0, 1], [0, 1]),
          transformOrigin: "0%",
        }}
      />
    </motion.div>
  );
};

export default Portfolio;
