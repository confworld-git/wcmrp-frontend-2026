import React from "react";
import image_1 from "../../assets/publication/crowdpeople.jpg";
import Journal from "../../assets/publication/conference.png";
import image_cheking from "../../assets/publication/undraw_done-checking_ra6c.svg";
import image_process from "../../assets/publication/undraw_processing_abt1.svg";
import Proceedings from "../../components/Proceedings";
const Publication = () => {
  const publicationData = [
    {
      title: "Plagiarism Check",
      points: [
        "Every submission undergoes a plagiarism check using Crossref Similarity Check, which is powered by iThenticate.",
        "This ensures that all articles submitted to the conference are original and free from plagiarism.",
      ],
      image: image_cheking,
    },
    {
      title: "Review Process",
      points: [
        "Submissions that pass the plagiarism check are sent to the scientific committee for review.",
        "Any submission found to be plagiarized at any stage will be automatically rejected.",
      ],
      image: image_process,
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <div className=""></div>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-500">
        Publication of Presented Research
      </h2>
      <p className="text-md text-center font-medium">
        The 2<span className="text-sm align-super">nd</span> World Conference on
        Multidisciplinary Research and Practices (WCMRP-2026) provides several
        publication opportunities for presented work:
      </p>

      <div className="text-center flex flex-col md:flex-row justify-center gap-5 my-10 items-center">
        <div
          data-aos="fade-right"
          className=" bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:w-xl h-auto "
        >
          <div className="w-full md:h-67 overflow-hidden">
            <img
              className=" object-cover object-top rounded-t-lg"
              src={image_1}
              alt="corporate-businessman"
            />
          </div>
          <div className="flex flex-col h-38 justify-center items-center p-2 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600">
              Conference Proceedings
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              All accepted and registered abstracts will be published in the
              Conference Proceedings with an ISBN Number.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="text-center flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:w-xl h-auto "
        >
          <div className="flex flex-col justify-center items-center p-4 leading-normal w-full">
  
  {/* Image Container */}
  <div className="w-full h-64 md:h-62  overflow-hidden rounded-t-lg md:rounded-none md:rounded-e-lg">
    <img
      className="w-full h-full object-fit"
      src={Journal}
      alt="corporate-businessman"
    />
  </div>

  <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600 mt-4">
    Journal Publication
  </h5>

  <p className="mb-3 font-normal text-gray-700 text-center">
    Publish your high-quality paper in various Web of Science, Scopus
    and other internationally indexed journals, increasing the
    visibility and impact of your research.
  </p>
</div>

        </div>
      </div>
      <Proceedings />
      <div
        data-aos="fade-up"
        className=" flex flex-col space-y-5 justify-center items-center  rounded-2xl p-5"
      >
        <h3 className="text-blue-600 text-3xl font-bold text-center">
          Plagiarism Policy & Publication Ethics
        </h3>
        <p className="w-3/5 text-justify text-amber-500 text-md font-medium ">
          The 2<span className="text-sm align-super">nd</span> World Conference
          on Multidisciplinary Research and Practices (WCMRP-2026) adheres to
          stringent anti-plagiarism policies. Here are the key points about
          their process:
        </p>

        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center space-y-10"
        >
          {publicationData.map((data, index) => (
            <div
              data-aos="zoom-out"
              key={index}
              className="flex flex-col min-h-70 md:flex-row items-center justify-center gap-5 p-5 rounded-2xl shadow-lg"
            >
              <img
                className="max-h-68 max-w-68 object-center object-fill"
                src={data.image}
                alt={data.title}
              />
              <div className="max-w-lg space-y-2">
                <h4 className="text-xl font-bold text-center text-indigo-600 ">
                  {data.title}
                </h4>
                <ul className="list space-y-2">
                  {data.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-center items-start"
                    >
                      <div>
                        <svg
                          className="w-15"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#1f1f1f"
                        >
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </div>
                      <li>{point}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publication;
