import React from "react";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";
import video from "../../assets/wcmrp-highlights.mp4";
import CountdownNew from "./countdown";
import LogoList from "./LogoList";

const Landing = () => {
  return (
    <div className="relative w-full  bg-white text-black" data-aos="fade-up">
      <div className="flex flex-col md:grid md:grid-cols-2 w-full h-full">
        
        {/* Left side text */}
        <div className="relative flex flex-col justify-center items-center md:items-start p-4 sm:p-6 md:p-8 z-10">
          <div className=" w-full text-center md:text-left space-y-3 md:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug text-blue-700">
              2<span className="text-xs sm:text-sm align-super">nd</span> World Conference on Multidisciplinary Research and Practices (WCMRP-2026)
            </h1>

            <h2 className="text-xs sm:text-sm md:text-lg font-medium leading-normal text-black">
              Theme: "Integrating Knowledge Across Disciplines for Global Impact: Innovations, Challenges and Sustainable Solutions"
            </h2>

            <p className="text-xs sm:text-sm md:text-base font-semibold text-orange-500">
              Hybrid conference (In person + Virtual)
            </p>

            <p className="text-xs sm:text-sm md:text-base text-black">
              Organized by: Confworld Educational Research and Development Association <br />
              <span className="mt-1 inline-block">ISBN: 978-72-745627-3-1</span>
            </p>

            {/* Date & Location */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
              <div className="flex items-center gap-2 bg-[#524cf2] px-3 py-2 rounded-md shadow-md min-w-[160px] justify-center">
                <span className="h-5 w-5 md:h-6 md:w-6 bg-white rounded-full flex justify-center items-center text-[#292887]">
                  <HiMiniCalendarDateRange />
                </span>
                <span className="font-semibold text-xs sm:text-sm md:text-base text-white">29-30 May, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-[#524cf2] px-3 py-2 rounded-md shadow-md min-w-[160px] justify-center">
                <span className="h-5 w-5 md:h-6 md:w-6 bg-white rounded-full flex justify-center items-center text-[#292887]">
                  <MdLocationPin />
                </span>
                <span className="font-semibold text-xs sm:text-sm md:text-base text-white">Kuala Lumpur, Malaysia</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="pt-4">
              <CountdownNew targetDate="2026-05-27T00:00:00" />
            </div>
          </div>
        </div>

        {/* Right side video */}
        <div className="relative w-full bg-gradient-to-b from-violet-950 to-blue-900 flex justify-center items-center p-4 sm:p-6 md:p-8">
          <video
            className="w-full  h-64 sm:h-72 md:h-[28rem] object-cover object-center rounded-md shadow-lg"
            autoPlay
            muted
            loop
            playsInline
            data-aos="zoom-in-up"
          >
            <source type="video/webm" src={video} />
          </video>
        </div>
      </div>

      {/* Logo list */}
      <div className="w-full px-4 sm:px-6 py-8 sm:py-10 bg-white text-white text-center">
        <LogoList />
      </div>

      
    </div>
  );
};

export default Landing;
