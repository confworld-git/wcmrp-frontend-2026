import React from "react";
import {
  FaUsers,
  FaBookOpen,
  FaFileAlt,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";

import image from "../../assets/home_image/undraw_road-sign_2g9d.svg";

function WhyJoinUs() {
  const conferenceBenefits = [
    {
      title: "Networking Opportunities",
      description:
        "Connect with experts, scholars and practitioners across various disciplines.",
      color: "bg-blue-400",
      icon: <FaUsers className="text-white text-3xl" />,
    },
    {
      title: "Knowledge Sharing",
      description:
        "Gain insights from keynote speakers and diverse presentations.",
      color: "bg-green-400",
      icon: <FaBookOpen className="text-white text-3xl" />,
    },
    {
      title: "Publication Prospects",
      description: "Present your research and publish in reputable journals.",
      color: "bg-yellow-400",
      icon: <FaFileAlt className="text-white text-3xl" />,
    },
    {
      title: "Professional Development",
      description:
        "Enhance your skills and expertise through collaborative discussions.",
      color: "bg-red-400",
      icon: <FaChalkboardTeacher className="text-white text-3xl" />,
    },
    {
      title: "Global Perspective",
      description:
        "Engage with international participants addressing global challenges.",
      color: "bg-teal-400",
      icon: <FaGlobe className="text-white text-3xl" />,
    },
  ];

  return (
    <section
      className=" bg-right bg-auto bg-no-repeat space-y-10"
      // style={{
      //   backgroundImage: `url(${image})`,
      // }}
    >
      <h2
        data-aos="flip-left"
        className="text-3xl text-indigo-500 text-center font-bold"
      >
        Why Do You Join Us?
      </h2>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center items-center gap-6 p-6"
      >
        {conferenceBenefits.map((benefit, index) => (
          <div
            data-aos="zoom-out"
            key={index}
            className={`flex flex-col items-center justify-center w-60 h-60 p-6 rounded-lg shadow-lg text-white ${benefit.color}`}
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="font-semibold text-indigo-700 text-center text-lg">
              {benefit.title}
            </h3>
            <p className="text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
      <marquee className="bg-[#FF7043] text-white p-1">
        Join us to be part of transformative conversations that drive innovation
        and collaboration in research!
      </marquee>
    </section>
  );
}

export default WhyJoinUs;
