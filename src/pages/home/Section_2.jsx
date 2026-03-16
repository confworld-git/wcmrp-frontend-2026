import React from "react";
import image from "../../assets/home_image/people-taking-part-high-protocol-event.jpg";

function Section_2() {
  return (
    <section className="relative flex justify-center items-center isolate overflow-hidden p-5 bg-gradient-to-t from-white via-cyan-200 to-sky-300 ">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 md:w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="flex flex-col md:flex-row justify-evenly items-start md:gap-5">
        <div
          data-aos="fade-right"
          className="flex-2/4 rounded-md bg-amber-50 p-2 mb-10 lg:mb-0"
        >
          <img
            loading="lazy"
            className="w-full rounded-md"
            src={image}
            alt="Conference"
          />
        </div>
        <figure
          data-aos="fade-up"
          className="w-full p-5 bg-amber-50 rounded-md shadow-lg "
        >
          <figcaption
            data-aos="fade-up"
            className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-1"
          >
            Conference Theme
          </figcaption>
          <blockquote
            data-aos="fade-up"
            className="text-justify text-base md:text-md font-semibold leading-5 md:leading-8 text-gray-800"
          >
            The theme for the{" "}
            <strong className="text-[#FF7043]">
              2<span className="align-super text-sm">nd</span> World Conference
              on Multidisciplinary Research and Practices (WCMRP-2026)
            </strong>{" "}
            is{" "}
            <span className="text-white bg-blue-400 rounded-md">
              "Integrating Knowledge Across Disciplines for Global Impact:
              Innovations, Challenges and Sustainable Solutions"
            </span>{" "}
            This theme emphasizes the importance of bringing together diverse
            fields of study to address pressing global issues through innovation
            and collaboration. It encourages the exchange of ideas, fostering
            interdisciplinary solutions that tackle challenges across various
            domains, including science, technology,engineering,education and
            humanities and more.
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

export default Section_2;
