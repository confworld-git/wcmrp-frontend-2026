import React, { useState, useEffect } from "react";
// import Download from "./Download";
import { HiMiniXMark } from "react-icons/hi2";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { downloadURI } from "../../utils/utils";

const DownloadForm = ({ setPopup }) => {
  const [DownloadForm, setDownloadForm] = useState({});

  const HandleDownload = (e) => {
    const { name, value } = e.target;
    setDownloadForm((prv) => ({ ...prv, [name]: value }));
  };

  const handledNumber = (e) => {
    setDownloadForm((prv) => ({ ...prv, Number: e }));
  };

  const handleSubmitDownload = async (e) => {
    event.preventDefault();

    const { Name, Email, Number, Link, Info } = DownloadForm;
    if (
      !Name.trim() ||
      !Email.trim() ||
      !Number.trim() ||
      !Link.trim() ||
      !Info.trim()
    ) {
      toaster.warning("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/download`,
        DownloadForm
      );

      if (response.status === 201) {
        const link = document.createElement("a");
        link.href = "./wcmrp_brochure.pdf";
        link.download = "wcmrp_brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        downloadURI("wcmrp_brochure.pdf", "wcmrp_brochure.pdf");
        setPopup(false);
        toaster.success(response.data.message);
      }
      setDownloadForm({
        Name: "",
        Email: "",
        Number: "",
        Link: "",
        Info: "",
      });
    } catch (error) {
      console.error("Error sending data:", error);
      // toaster.danger("Something's wrong");
    }
  };
  return (
    <div className="fixed inset-0 z-[100] p-3 flex justify-center items-center max-h-full min-h-screen bg-black/30 backdrop-blur-sm overflow-hidden">
      <div className="bg-white p-3 md:p-5 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <HiMiniXMark
            className="text-gray-500 text-2xl hover:border rounded-sm cursor-pointer"
            onClick={() => setPopup(false)}
          />
        </div>
        <div className="p-3 md:p-5 flex flex-col justify-center items-center space-y-4 ">
          <h1 className="text-2xl text-violet-600 text-center font-bold mb-4">
            Download WCMRP Brochure
          </h1>
          <section className="space-y-4">
            <input
              type="text"
              name="Name"
              value={DownloadForm.Name}
              placeholder="Enter Your Name"
              onChange={HandleDownload}
              className="w-full p-2 border border-gray-300 rounded focus:outline-1"
              required
            />
            <input
              type="email"
              name="Email"
              value={DownloadForm.Email}
              placeholder="Enter Your Email"
              onChange={HandleDownload}
              className="w-full p-2 border border-gray-300 rounded focus:outline-1"
              required
            />
            <PhoneInput
              defaultCountry="US"
              value={DownloadForm.Number}
              onChange={handledNumber}
              id="Mobile_input"
              placeholder="Mobile Number (select country)"
              className="w-full p-2 border border-gray-300 rounded focus:outline-1"
              required
            />
            <input
              type="url"
              name="Link"
              value={DownloadForm.Link}
              placeholder="Social Media Profile Link"
              onChange={HandleDownload}
              className="w-full p-2 border border-gray-300 rounded focus:outline-1"
              required
            />
            <input
              type="text"
              name="Info"
              value={DownloadForm.Info}
              placeholder="Can you tell me how you heard about the conference?"
              onChange={HandleDownload}
              className="w-full p-2 border border-gray-300 rounded focus:outline-1"
              required
            />
          </section>
          <button
            onClick={handleSubmitDownload}
            className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-full cursor-pointer text-center"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm;
