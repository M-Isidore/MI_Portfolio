import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm Mokosa Isidore,a web developer instructor with a passioning for
        coding.I specialize in React and front-end developemnt, helping clients
        build interactive and responsive websites.Outside of coding, I enjoy
        music, video games, learning and sharing knowledge to inspire others to
        achieve their goals.{" "}
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
