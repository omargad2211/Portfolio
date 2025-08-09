import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/use-in-view";
import { FaTooth, FaUserGraduate } from "react-icons/fa";
import { BsLaptop, BsPhone } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

const steps = [
  {
    id: 1,
    title: "Dentistry",
    description: "Started as a Dentist, exploring the field of healthcare.",
    icon: <FaTooth />,
  },
  {
    id: 2,
    title: "Self-Learning",
    description: "Self-taught programming through online resources.",
    icon: <IoBookSharp />,
  },
  {
    id: 3,
    title: "ITI",
    description: "Joined the ITI program to enhance my tech skills.",
    icon: <FaUserGraduate />,
  },
  {
    id: 4,
    title: "Depo Web Company",
    description: "Started my career as a Front-End Developer.",
    icon: <BsLaptop />,
  },
  {
    id: 5,
    title: "Depx Company",
    description: "Joined as React native Developer.",
    icon: <BsPhone />,
  },
];

const MyJourney = () => {
  const { ref, hasAnimated } = useInViewAnimation(0.2); // Using the custom hook

  return (
    <div ref={ref} className="py-10 bg-gray-100 flex flex-col items-center">
      {hasAnimated && (
        <>
          <h2 className="text-3xl font-bold mb-8">My Journey</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center relative">
                {/* Step */}
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full text-2xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block w-24 border-dotted border-t-2 border-gray-400 absolute left-full top-7"
                    aria-hidden="true"
                  ></div>
                )}
                {index < steps.length - 1 && (
                  <div
                    className="md:hidden h-24 border-dotted border-l-2 border-gray-400 absolute top-full left-7"
                    aria-hidden="true"
                  ></div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyJourney;
