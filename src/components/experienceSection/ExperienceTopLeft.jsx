import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        since 2025
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="+++" text="Projects" />
      </div>
      <p className="text-center text-white">
        Built numerous real world projects and have taken many masterclasses
        online.
      </p>
      <ExperienceInfo number="$" text="Affordable Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
