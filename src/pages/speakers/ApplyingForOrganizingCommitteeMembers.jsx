import React, { useState, useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";
import OCMform from "../speakers/OCMform";
import arrow from "../../assets/Speakers/undraw_fun-arrow.svg";
const ApplyingForOrganizingCommitteeMembers = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("OCMform");

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.3 }
      );

      observer.observe(target);

      return () => observer.disconnect();
    }
  }, []);

  const ceradaResponsibilities = [
    {
      name: "Strategic Guidance",
      description: "Offering expert advice to guide CERADA’s direction.",
    },
    {
      name: "Conference Planning",
      description:
        "Assisting in the development of conference themes and selection of speakers.",
    },
    {
      name: "Review and Feedback",
      description:
        "Reviewing research submissions and providing constructive feedback.",
    },
    {
      name: "Abstract/Full Paper Review",
      description:
        "Evaluating submissions and ensuring alignment with the conference theme.",
    },
    {
      name: "Networking",
      description:
        "Facilitating connections with other researchers and professionals.",
    },
    {
      name: "Outreach",
      description:
        "Promoting CERADA’s initiatives and recruiting new members and participants.",
    },
    {
      name: "Mentorship",
      description:
        "Supporting young researchers and professionals in their academic growth.",
    },
    {
      name: "Planning and Coordination",
      description:
        "Assisting with the overall event organization, including venue logistics, agenda setting and speaker arrangements.",
    },
    {
      name: "Promotion",
      description:
        "Engaging in marketing and outreach to attract participants and speakers.",
    },
    {
      name: "Onsite Management",
      description:
        "Facilitating sessions, guiding attendees and managing any technical issues during the hybrid event.",
    },
    {
      name: "Post-Conference Tasks",
      description:
        "Ensuring the publication of proceedings and addressing feedback.",
    },
  ];

  return (
    <section className="relative flex justify-center items-center flex-col my-8">
      <h1 className="text-2xl md:text-3xl text-center text-blue-500 font-bold my-4">
        Roles & Responsibilities for Organizing Committee Member
      </h1>
      <div className="container w-11/12 p-2 md:w-10/12 rounded-xl shadow-xl">
        <div className="flex flex-col gap-4 md:p-10">
          {ceradaResponsibilities.map((responsibility, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-teal-100 p-4 flex flex-row items-start gap-2 rounded-lg"
            >
              <div>
                <FaHandPointRight className="text-xl md:text-2xl text-red-600" />
              </div>
              <div>
                <h2 className="text-md md:text-xl text-blue-500 font-bold">
                  {responsibility.name}
                </h2>
                <p className="text-sm md:text-lg">
                  {responsibility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up" className="mt-5 p-5">
        <h1 className="text-2xl md:text-3xl text-center font-bold text-blue-500">
          Qualifications for Organizing Committee Member
        </h1>
        <div className="container bg-green-100 rounded-xl my-10 shadow-[_0px_3px_8px_rgba(0,0,0,0.24)] space-y-4 p-6">
          <h4 className="text-xl font-medium text-blue-500">
            Qualifications for serving on our organizing committee include
          </h4>
          <ul className="list-disc list-inside leading-8 text-md font-medium">
            {[
              "Dean/Director/Principal with a Doctorate",
              "Should be an Editorial Board Member of a Prestigious Journal",
              "Must be an experienced Reviewer",
              "Should have served on a review committee for 10+ international conferences",
            ].map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
          <p className="text-lg font-medium text-gray-700">
            The Scientific Committee consists of three subcommittees: the Review
            Committee, Technical Committee and Editorial Committee. It plays a
            key role in setting important dates for the upcoming 2026
            educational conference, managing paper submissions, developing the
            final program and evaluating abstracts for acceptance. The
            committee's proactive involvement ensures that the conference stays
            aligned with current research trends, enabling the presentation of
            innovative ideas during the scientific sessions.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="container bg-cyan-100 rounded-xl my-10 shadow-[_0px_3px_8px_rgba(0,0,0,0.24)] space-y-4 p-6"
        >
          <h4 className="text-xl font-medium text-blue-500">
            Qualifications for serving on our Advisory Committee
          </h4>
          <ul className="list-disc list-inside leading-8 text-md font-medium">
            {[
              "Dean/Director/Principal with a doctorate",
              "Professors/HODs with 10+ years of experience",
              "Associate Professors/Assistant Professor/Senior Lecturers with 5+ years of experience",
              "Industrial Professionals with 8+ years of experience",
              "Professionals from the host country",
            ].map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
          <p className="text-lg font-medium text-gray-700">
            The committee works closely with other teams to maintain the event
            schedule, assist with hospitality and registration and coordinate
            venue setup. They also ensure that the conference environment is
            well-prepared and runs smoothly.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="container bg-green-100 rounded-xl my-10 shadow-[_0px_3px_8px_rgba(0,0,0,0.24)] space-y-4 p-6"
        >
          <h4 className="text-xl font-medium text-blue-500">
            Qualifications for serving on our Scientific committee
          </h4>
          <ul className="list-disc list-inside leading-8 text-md font-medium">
            {[
              "Dean/Director/Principal with a Doctorate",
              "Should be an Editorial Board Member of a Prestigious Journal",
              "Must be an experienced Reviewer",
              "Should have served on a review committee for 10+ international conferences",
            ].map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
          <p className="text-lg font-medium text-gray-700">
            The Scientific Committee consists of three subcommittees: the Review
            Committee, Technical Committee and Editorial Committee. It plays a
            key role in setting important dates for the upcoming 2026
            educational conference, managing paper submissions, developing the
            final program and evaluating abstracts for acceptance. The
            committee's proactive involvement ensures that the conference stays
            aligned with current research trends, enabling the presentation of
            innovative ideas during the scientific sessions.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="container bg-cyan-100 rounded-xl my-10 shadow-[_0px_3px_8px_rgba(0,0,0,0.24)] space-y-4 p-6"
        >
          <h4 className="text-xl font-medium text-blue-500">
            Qualifications for serving on our Hospitality committee
          </h4>
          <ul className="list-disc list-inside leading-8 text-md font-medium">
            {[
              "Dean/Director/Principal with a Doctorate",
              "Professor/HODs with 10+ years of Experience",
              "Associate Professor/Assistant Professor/Senior Lecturer with 5+ years of Experience",
              "Industrial Professionals with 8+ years of Experience",
              "Professionals from the host country",
            ].map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
          <p className="text-lg font-medium text-justify text-gray-700">
            They provide conference venue details, share the organization’s
            background and address specific participant inquiries. The committee
            works with other teams to maintain an event calendar, which is
            crucial for reserving facilities and keeping members informed about
            upcoming community activities.
          </p>
          <p className="text-lg font-medium text-justify text-gray-700">
            Volunteers are allocated with assisting in hospitality,
            registration, venue setup and conference activities on a rotating
            schedule. Arriving early for meetings ensures everything is properly
            organized, which includes arranging the seats and setting up the
            hospitality table with necessary equipment and supplies.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" id="OCMform" className=" w-full">
        <OCMform />
      </div>
      {isVisible && (
        <div className="bottom-5 right-3 fixed">
          <a href="#OCMform" className="text-blue-500 font-bold text-lg">
            Form Below
            <img
              className="bg-center rotate-180 animate-bounce"
              src={arrow}
              alt="arrow"
            />
          </a>
        </div>
      )}
    </section>
  );
};

export default ApplyingForOrganizingCommitteeMembers;
