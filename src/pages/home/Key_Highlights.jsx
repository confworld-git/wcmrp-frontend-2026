import React from "react";

function Key_Highlights() {
  const highlights = [
    {
      title: "Interdisciplinary Collaboration",
      description:
        "Foster innovative partnerships across diverse fields to tackle global challenges.",
      color: "bg-red-500",
    },
    {
      title: "Expert Speakers",
      description:
        "Hear from leading researchers and thought leaders sharing insights on innovative methodologies and best practices.",
      color: "bg-blue-500",
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with professionals, academics and practitioners from various disciplines.",
      color: "bg-green-500",
    },
    {
      title: "Workshops and Panels",
      description:
        "Participate in interactive sessions that encourage knowledge sharing and collaborative problem-solving.",
      color: "bg-yellow-500",
    },
    {
      title: "Publication Opportunities",
      description:
        "Present your research and get it published in Scopus-indexed journals and Clarivate WoS proceedings.",
      color: "bg-purple-500",
    },
    {
      title: "Hybrid Flexibility",
      description:
        "Choose to attend in person or virtually, with full access to all conference sessions, materials and networking opportunities.",
      color: "bg-teal-500",
    },
    {
      title: "CERADA Awards",
      description:
        "Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-5 bg-gradient-to-b from-white via-cyan-200 to-sky-300">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center text-blue-500 mb-10"
      >
        Key Highlights
      </h2>
      <div data-aos="fade-up" className="flex flex-wrap justify-center gap-5">
        {highlights.map((highlight, index) => (
          <div key={index} data-aos="zoom-in">
            <div
              className={`${
                highlight.color ? highlight.color : "bg-blue-500"
              } text-white flex flex-col items-center justify-center text-center h-40 max-w-94 p-5 rounded-lg shadow-md cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110`}
            >
              <p className="text-lg font-bold">{highlight.title}</p>
              <p className="text-md">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Key_Highlights;
