import React from "react";
import logo1 from "../../assets/logo/logo1.webp";
import logo2 from "../../assets/logo/logo2.png";
import sdg4 from "../../assets/goals/sdg4.png";
import sdg7 from "../../assets/goals/sdg7.png";
import sdg8 from "../../assets/goals/sdg8.png";
import sdg9 from "../../assets/goals/sdg9.png";
import sdg11 from "../../assets/goals/sdg11.png";
import sdg12 from "../../assets/goals/sdg12.png";
import sdg13 from "../../assets/goals/sdg13.png";
import sdg14 from "../../assets/goals/sdg14.png";
import sdg15 from "../../assets/goals/sdg15.png";
import sdg16 from "../../assets/goals/sdg16.png";
import sdg17 from "../../assets/goals/sdg17.png";

const LogoList = () => {
  return (
    <section className=" overflow-hidden">
      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-1.5 items-center px-4 ">
        <img
          className="h-14 md:h-24 bg-white p-2"
          src={logo1}
          alt="Confworld Educational Research and Development Association logo"
        />
        <img loading="lazy" className="h-14" src={logo2} alt="scopus logo" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg4} alt="Quality Education" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg7} alt="Affordable and Clean Energy" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg8} alt="Decent Work and Economic Growth" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg9} alt="Industry, Innovation, and Infrastructure" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg11} alt="Sustainable Cities and Communities" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg12} alt="Responsible Consumption and Production" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg13} alt="Climate Action" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg14} alt="Life Below Water" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg15} alt="Life on Land" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg16} alt="Peace, Justice, and Strong Institutions" />
        <img loading="lazy" className="h-14 md:h-18" src={sdg17} alt="Partnerships for the Goals" />
      </div>

      {/* Text always centered */}
      <div className="mt-1">
        <p className="text-blue-950 font-semibold text-sm text-center">
          #CERADA Supports SDGs
        </p>
      </div>
    </section>
  );
};

export default LogoList;
