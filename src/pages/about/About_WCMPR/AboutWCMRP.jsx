import React from "react";
import {
  FaUsers,
  FaLeaf,
  FaLightbulb,
  FaBalanceScale,
  FaGraduationCap,
} from "react-icons/fa";
import bgimage from "../../../assets/about/AboutWCMPR/wcmrp-banner.webp";

const AboutWCMRP = () => {
  const keyFocusAreas = [
    {
      title: "Interdisciplinary Collaboration",
      description:
        "Encouraging partnerships across various fields to enhance research impact.",
      icon: <FaUsers className="text-blue-500 text-6xl" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Sustainable Development",
      description:
        "Exploring innovative solutions for environmental, social and economic sustainability.",
      icon: <FaLeaf className="text-green-500 text-6xl" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Technology and Innovation",
      description:
        "Leveraging new technologies and methods to tackle global challenges.",
      icon: <FaLightbulb className="text-yellow-500 text-6xl" />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Policy and Governance",
      description:
        "Discussing effective strategies for implementing research findings in policy frameworks.",
      icon: <FaBalanceScale className="text-purple-500 text-6xl" />,
      bgColor: "bg-purple-100",
    },
    {
      title: "Education and Capacity Building",
      description:
        "Enhancing skills and knowledge-sharing among researchers and practitioners.",
      icon: <FaGraduationCap className="text-red-500 text-6xl" />,
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="flex flex-col justify-center p-5 text-gray-700">
      {/* About Section */}
      <section data-aos="fade-up" className="mb-5">
        <div className="rounded-xl md:max-h-90 overflow-hidden">
          <img
            loading="lazy"
            className="rounded-2xl w-full"
            src={bgimage}
            alt="bgimage"
          />
        </div>
        <h2 className="text-3xl font-bold text-center my-5 text-teal-600">
          About WCMRP-2026
        </h2>
        <p className="mt-2 text-lg text-justify">
          The{" "}
          <span className="font-bold">
            "2<span className="text-sm font-bold align-super">nd</span> World
            Conference on Multidisciplinary Research and Practices (WCMRP-2026)"
          </span>{" "}
          is a premier event designed to bring together researchers,
          professionals and scholars from diverse fields. This conference
          focuses on innovative approaches and collaborative research to address
          global challenges. Participants will have opportunities to present
          their findings, engage in meaningful discussions and network with
          peers from around the world.
        </p>
        <p className="mt-2 text-lg text-justify">
          By fostering interdisciplinary dialogue, WCMRP aims to inspire new
          ideas and solutions that contribute to sustainable development and
          societal advancement.
        </p>
      </section>

      {/* Conference Theme Section */}
      <section className="">
        <div className="rounded-xl bg-yellow-100 text-blue-800 p-4 bg-center bg-cover">
          <h2 data-aos="fade-right" className="text-2xl font-bold text-teal-600">
            Conference Theme
          </h2>
          <p data-aos="fade-right" className="mt-2 text-lg font-semibold text-justify">
            "Integrating Knowledge Across Disciplines for Global Impact:
            Innovations, Challenges and Sustainable Solutions"
          </p>
          <p data-aos="fade-right" className="mt-2 text-lg text-justify">
            This theme emphasizes the importance of interdisciplinary
            collaboration and innovative strategies in addressing pressing
            global issues. By fostering partnerships among researchers from
            various fields, the conference aims to generate impactful solutions
            that contribute to sustainable development and enhance societal
            resilience.
          </p>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="">
        <h3 data-aos="zoom-in" className="mt-8 mb-5 text-3xl text-center font-bold text-teal-500">
          Key Focus Areas
        </h3>
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center items-center gap-5 bg-cyan-50 rounded-2xl p-5"
        >
          {keyFocusAreas.map((area, index) => (
            <div
              key={index}
              data-aos="flip-left"
              className={`${area.bgColor} relative flex flex-col justify-center items-center hover:scale-105 transition-transform duration-500 ease-in-out shadow-md rounded-md w-full sm:w-[45%] md:w-[30%] h-60 p-4`}
            >
              <div className="mb-2">{area.icon}</div>
              <h3 className="text-xl text-teal-600 text-center font-bold">
                {area.title}
              </h3>
              <p className="text-md font-medium text-center">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutWCMRP;
