import React, { useState } from "react";
import image from "../../assets/session/2149595847.webp";
import download_svg from "../../assets/download_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import Downloadform from "./Downloadform";

const EssentialDownloads = () => {
  const [popup, setPopup] = useState(false);

  const downloads = [
    { title: "Conference Poster", file: "WCMRP Poster.jpg" },
    { title: "Conference Brochure", file: null }, // special case - popup
    { title: "Abstract Template", file: "abstract_template.docx" },
    { title: "Full Paper Template", file: "full_paper_template.doc" },
    { title: "Presentation Template", file: "presentation_template.ppt" },
    { title: "Registration Form", file: "registration_form.pdf" },
  ];

  const handleDownload = (item) => {
    if (item.title === "Conference Brochure") {
      setPopup(true);
    } else if (item.file) {
      const link = document.createElement("a");
      link.href = `/${item.file}`; // file must be inside public/
      link.download = item.file;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="relative flex flex-col h-46 md:h-56 items-center justify-center w-full text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${image})`,
            filter: "brightness(50%)",
          }}
        ></div>

        {/* Content */}
        <h2 className="text-3xl font-bold relative">Essential Downloads</h2>
      </div>

      <div className="grid md:grid-cols-3 justify-center items-center gap-10 w-full p-4 my-10">
        {downloads.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="flex flex-col p-5 w-60 h-36 space-y-5 justify-center items-center rounded-md shadow-[_0px_7px_29px_0px_rgba(0,0,0,0.24)]"
          >
            <h3 className="text-lg text-center text-indigo-500 font-medium">
              {item.title}
            </h3>
            <button
              onClick={() => handleDownload(item)}
              className="inline-flex gap-1 bg-gradient-to-r from-purple-200 via-violet-400 to-indigo-600 hover:opacity-90 text-white font-bold py-2 px-5 rounded-md"
            >
              <img
                loading="lazy"
                className="w-6 h-6"
                src={download_svg}
                alt="download_svg"
              />
              Download
            </button>
          </div>
        ))}
      </div>

      {popup && <Downloadform setPopup={setPopup} />}
    </section>
  );
};

export default EssentialDownloads;
