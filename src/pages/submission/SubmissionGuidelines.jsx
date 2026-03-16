import React from "react";
import image from "../../assets/submission/Checklist.webp";

const SubmissionGuidelines = () => {
  const guidelines = [
    {
      title: "Abstract Submission Guidelines",
      points: [
        "The original work should be described in the abstract.",
        "Abstract should be written in English.",
        "It should be one paragraph with a word limit of 150.",
        "Please provide a slight biography with your abstract (An example is given in the template).",
        "The abstract should be submitted in the format of an MS Word (.doc or .docx) document.",
        "After you've finished preparing your abstract according to the above instructions, submit your abstract here.",
        "After submission, you will be acknowledged of the receipt of the abstract via email within three working days.",
        "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
      ],
      link: "Submit Abstract",
    },
    {
      title: "Full Paper Submission Guidelines",
      description:
        "You are encouraged to submit full papers if your abstract is accepted and you have paid the registration cost for the WCMRP-2026.",
      points: [
        "Total number of pages must be 6-8 in double-column format.",
        "The manuscript should be in English and checked for grammar and language errors.",
        "Tables, figures and images should be properly named with good quality.",
        "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
        "Abstract not more than 150 words",
        "Minimum 5 Keywords should be written in lowercase letters and italics (Not applicable to names/scientific names) and should be separated with commas.",
        "Names of affiliations should be given including the country.",
        "Background/Introduction, Motivation and Objectives.",
        "Statement of Contribution/Methods.",
        "Results, Discussion and Conclusion.",
        "Funding statement",
        "Acknowledgements",
        `References minimum 35 (30%  of which must be within the last 2 years) should be there. Authors may submit their references in Chicago style. Authors are responsible for ensuring that the information in each reference is complete and accurate. All references should be numbered consecutively in the order of their first citation. Citations of references in the text should be identified using numbers in square brackets e.g., "as discussed by Smith [9]"; "as discussed elsewhere [9, 10]". All references should be cited within the text and uncited references will be removed.`,
        "The paper should be submitted in the format of an MS Word (.doc or .docx) document.",
        "After you've finished preparing your full paper according to the above instructions, submit your full paper here.",
      ],
      link: "Submit Full Paper",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center">
      <img
        data-aos="zoom-in"
        className="bg-center bg-cover h-56"
        src={image}
        alt="image_guidelines"
      />
      <div
        data-aos="fade-up"
        className="bg-cyan-50 p-5 rounded-md flex flex-col space-y-10"
      >
        {guidelines.map((guideline, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-cyan-100 rounded-lg shadow-lg p-3 md:p-5 space-y-5"
          >
            <h3
              data-aos="fade-up"
              className="text-2xl text-emerald-700 font-medium"
            >
              {guideline.title}
            </h3>
            {guideline.description && (
              <p data-aos="fade-up" className="text-white bg-green-700 p-1">
                {guideline.description}
              </p>
            )}
            <ul
              data-aos="fade-up"
              className="flex flex-col text-wrap justify-start items-start space-y-2"
            >
              {guideline.points.map((point, index) => (
                <li key={index} className="flex flex-row">
                  <div>
                    <svg
                      className="w-20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#1f1f1f"
                    >
                      <path d="M480-200 200-480l280-280 280 280-280 280Zm0-114 166-166-166-166-166 166 166 166Zm0-166Z" />
                    </svg>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="/Submission"
              className="rounded-lg text-white font-medium bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600 cursor-pointer px-2 py-3 transition-all duration-400 ease-in-out hover:bg-linear-to-t"
            >
              {guideline.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubmissionGuidelines;
