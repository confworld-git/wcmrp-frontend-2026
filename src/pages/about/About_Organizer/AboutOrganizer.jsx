import React from "react";
import image from "../../../assets/about/AboutOrganizer/CERADAFinall-BFC0q9FF.png";
import imag2 from "../../../assets/about/AboutOrganizer/standard-quality-control-concept-m.webp";
import imag3 from "../../../assets/about/AboutOrganizer/business-strategy-success-target-goals.webp";

function AboutOrganizer() {
  const ceradaInitiatives = [
    {
      description:
        "CERADA organizes a wide range of educational initiatives, which includes conferences, workshops, webinars, guest lectures, seminars, short-term training programs, public education programs and faculty development programs, all focused on Engineering and Science & Technology.",
    },
    {
      description:
        "With a focus on curiosity, innovation and the latest trends in Engineering and Technology, CERADA is devoted to advancing knowledge in these fields.",
    },
    {
      description:
        "We are committed to provide easy access to academic resources and support for aspiring students and research scholars from both urban and rural areas.",
    },
    {
      description:
        "We are committed to fostering partnerships with universities, organizations and associations to promote knowledge sharing and work collectively toward building a better future.",
    },
  ];

  const membershipLinks = [
    {
      name: "Primary Website",
      url: "https://confworld.org/",
    },
    {
      name: "Institutional Membership",
      url: "https://confworld.org/institutional",
    },
    {
      name: "Professional Membership",
      url: "https://confworld.org/professional",
    },
    {
      name: "Student Membership",
      url: "https://confworld.org/student",
    },
  ];

  return (
    <section className="container mx-auto my-5 p-5">
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center justify-center overflow-hidden"
      >
        <div data-aos="fade-right" className="container md:w-1/2">
          <h1 className="text-3xl text-blue-500 mb-4 text-center font-bold">
            About CERADA
          </h1>
          <p className="text-justify">
            The Confworld Educational Research And Development Association
            (CERADA) is an internationally recognized, globally operating
            multidisciplinary professional research and development association.
            Confworld Educational Research and Development Association (CERADA)
            aims to integrate researchers and academicians working in the micro
            disciplines of science and technology, fostering collaboration and
            innovation across a broad spectrum of fields.
          </p>
          <p className="text-justify">
            We organize top-tier international conferences, offering a platform
            for researchers and professionals to present their work, share ideas
            and network.
          </p>
          <p className=" text-justify">
            Our publication services support the submission of research papers
            to reputable, double blind peer-reviewed journals, ensuring
            successful publication through editing and peer-review assistance.
          </p>
        </div>
        <div data-aos="fade-left" className="md:w-1/2">
          <img
            className="bg-center bg-cover w-full"
            src={image}
            alt="image_Organizer"
          />
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="container flex flex-col md:flex-row items-center my-5 justify-center rounded-2xl shadow-sm bg-blue-50"
      >
        <div className="p-5 md:w-9/12">
          <h3 className="text-2xl mb-3 font-bold text-blue-500">Our Mission</h3>
          <p className="text-justify">
            Confworld Educational Research and Development Association (CERADA)
            advances global education and research through international
            conferences, research assistance and collaborative publications,
            fostering an inclusive environment for knowledge sharing and
            innovation.
          </p>
        </div>
        <div className="p-5">
          <img
            className="bg-center rounded-2xl shadow-md bg-cover w-full md:h-44"
            src={imag2}
            alt="image_Organizer_2"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="container flex flex-col md:flex-row items-center my-5 justify-center rounded-2xl shadow-sm bg-blue-50"
      >
        <div className="p-5">
          <img
            className="bg-center rounded-2xl shadow-md bg-cover w-full md:h-44"
            src={imag3}
            alt="image_Organizer_2"
          />
        </div>
        <div className="p-5 md:w-9/12">
          <h3 className="text-2xl mb-3 font-bold text-blue-500">Our Vision</h3>
          <p className="text-justify">
            Confworld Educational Research and Development Association (CERADA)
            envisions a borderless educational research community committed to
            lifelong learning and excellence, aiming to be a catalyst for
            transformative advancements through cutting-edge research and
            international partnerships.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="container my-10 flex flex-col items-center"
      >
        <h3
          data-aos="zoom-in"
          className="text-3xl text-blue-500 mb-3 font-bold text-center"
        >
          What we do
        </h3>
        <p data-aos="zoom-in" className="text-justify w-4/5">
          Confworld Educational Research and Development Association (CERADA)
          dedicated to building a dynamic community of professionals, educators,
          researchers and innovators in the realms of engineering, science &
          technology, business & management, social sciences & humanities and
          education. As part of this mission, we offer a platform that enables:
        </p>
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center items-center text-center gap-5 my-5"
        >
          {ceradaInitiatives.map((item, index) => (
            <div
              key={index}
              className=" p-4 flex flex-wrap flex-col justify-center items-center md:w-3/12 h-66 rounded-md shadow-md bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 hover:scale-105 transform transition-all duration-300"
            >
              <p className="font-medium text-white text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="container bg-linear-to-r from-gray-300 via-yellow-500 to-amber-400 p-5 bg-center bg-cover my-10 rounded-2xl shadow-md"
        // style={{ backgroundImage: `url(${bg_image})` }}
      >
        <h3 className="text-2xl font-bold text-center text-white">Visit Our</h3>
        <div className="container my-10 flex flex-col md:flex-row items-stretch gap-10 justify-center">
          {membershipLinks.map((item, index) => (
            <a
              data-aos="zoom-out"
              key={index}
              href={item.url}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {item.name}
              <span className=" bg-amber-50 p-0.5 rounded-full ml-2 animate-bounce">
                <svg
                  className="bg-indigo-500 w-8 h-8 rounded-full "
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 32 32"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 13 2 C 11.355469 2 10 3.355469 10 5 L 10 16.8125 L 9.34375 16.125 L 9.09375 15.90625 C 7.941406 14.753906 6.058594 14.753906 4.90625 15.90625 C 3.753906 17.058594 3.753906 18.941406 4.90625 20.09375 L 4.90625 20.125 L 13.09375 28.21875 L 13.15625 28.25 L 13.1875 28.3125 C 14.535156 29.324219 16.253906 30 18.1875 30 L 19.90625 30 C 24.441406 30 28.09375 26.347656 28.09375 21.8125 L 28.09375 14 C 28.09375 12.355469 26.738281 11 25.09375 11 C 24.667969 11 24.273438 11.117188 23.90625 11.28125 C 23.578125 9.980469 22.394531 9 21 9 C 20.234375 9 19.53125 9.300781 19 9.78125 C 18.46875 9.300781 17.765625 9 17 9 C 16.648438 9 16.316406 9.074219 16 9.1875 L 16 5 C 16 3.355469 14.644531 2 13 2 Z M 13 4 C 13.554688 4 14 4.445313 14 5 L 14 16 L 16 16 L 16 12 C 16 11.445313 16.445313 11 17 11 C 17.554688 11 18 11.445313 18 12 L 18 16 L 20 16 L 20 12 C 20 11.445313 20.445313 11 21 11 C 21.554688 11 22 11.445313 22 12 L 22 16 L 24.09375 16 L 24.09375 14 C 24.09375 13.445313 24.539063 13 25.09375 13 C 25.648438 13 26.09375 13.445313 26.09375 14 L 26.09375 21.8125 C 26.09375 25.277344 23.371094 28 19.90625 28 L 18.1875 28 C 16.722656 28 15.457031 27.476563 14.40625 26.6875 L 6.3125 18.6875 C 5.867188 18.242188 5.867188 17.757813 6.3125 17.3125 C 6.757813 16.867188 7.242188 16.867188 7.6875 17.3125 L 12 21.625 L 12 5 C 12 4.445313 12.445313 4 13 4 Z"></path>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutOrganizer;
