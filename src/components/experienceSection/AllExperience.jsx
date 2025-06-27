import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Projects",
    date: "2025",
    responsibilities: [
      "Implementing reusable components",
      "Participating in large scale appliction",
      "Working on the perfomance of web applications",
      "Generating new ideas for better user experience",
    ],
  },
  {
    job: "Learning",
    company: "Online Course",
    date: "2024 - 2025",
    responsibilities: [
      "Udemy masterclasses",
      "Learned latest react technics",
      "Working on real world projects",
      "Complete understanding of concepts",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Support",
    date: "2025",
    responsibilities: [
      "Working with senior developer on big projects",
      "Mentored by expert in the field",
      "Good at resolving code problems with stack overflow",
      "Developer friends",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
