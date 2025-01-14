"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Loader } from "lucide-react";
import { useInViewAnimation } from "../hooks/use-in-view";
import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const { ref, hasAnimated } = useInViewAnimation();
  const [isLoading, setIsLoading] = useState(false); // State for loading

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    emailjs
      .sendForm(
        "service_r339v3q", // Replace with your EmailJS service ID
        "template_19lqq9f", // Replace with your EmailJS template ID
        e.target,
        "WSSb5ojVuhYEeO7hy" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          e.target.reset(); // Reset the form on success
        },
        (error) => {
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setIsLoading(false); // Set loading state back to false
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
          Get In Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:omargad7324@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
              >
                <Mail className="w-5 h-5" />
                omargad7324@gmail.com
              </a>
              <a
                href="https://github.com/omargad2211"
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
              >
                <Github className="w-5 h-5" />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/omar-gad-abdelwahhab/"
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            variants={itemVariants}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-black rounded-lg text-white font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
