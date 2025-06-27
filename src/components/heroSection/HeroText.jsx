import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center sm:text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        Front-end Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Mokosa Isidore
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" text-white mt-4 text-lg"
      >
        An innovative and Passionate Web Developer <br />
        Whatever you can imagine, I can create!
      </motion.p>
    </div>
  );
}

export default HeroText;
