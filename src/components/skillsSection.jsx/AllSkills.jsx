import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiTypescript } from "react-icons/si";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJs",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailWindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Firebase",
    icon: IoLogoFirebase,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkills
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
