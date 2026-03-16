import React, { useRef, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Submission = () => {
  const SubmissionRef = useRef();
  const [mobile, setMobile] = useState("");

  const generateSubmissionID = () => {
    const Random = Math.floor(Math.random() * 900) + 100;
    return `WCMRP2026_MY_${Random}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const maxFileSize =  3 * 1024 * 1024

      const allowedFileTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedFileTypes.includes(file.type)) {
        toaster.warning(
          "Invalid file type. Please upload a .doc or .docx file."
        );
        event.target.value = "";
        return;
      }

      if (file.size > maxFileSize) {
        toaster.warning(
          "File size exceeds the 300KB limit. Please upload a smaller file."
        );
        event.target.value = "";
        return;
      }
    }
  };

  const HandleSubmission = async (e) => {
    e.preventDefault();
    const newSubmissionID = generateSubmissionID();

    const formData = new FormData(SubmissionRef.current);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    formValues["SubmissionID"] = newSubmissionID;
    formValues["mobileNumber"] = mobile;

    const requiredFields = [
      "Submission_type",
      "paper_title",
      "authorName",
      "CoAuthorName",
      "correspondingEmail",
      "whatsappNumber",
      "presentationCategory",
      "presentationType",
      "Institution_Name",
      "Department",
      "designation",
      "Publication_Required",
      "file",
      "conferenceSource",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }
      } else if (!mobile || mobile.trim() === "") {
        toaster.warning("Mobile number is required.");
        return;
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    const formDataToSend = new FormData();
    formDataToSend.append("SubmissionID", newSubmissionID);
    formDataToSend.append("mobileNumber", mobile);
    formData.forEach((value, key) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/paperSubmission`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      SubmissionRef.current.reset();
      setMobile("");
      toaster.success(response.data.message);
    } catch (error) {
      toaster.danger("Something's wrong");
    }
  };

  return (
    <>
      {" "}
      <section className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
        <h1
          className="text-2xl text-indigo-700 font-bold text-center mb-6"
          data-aos="fade-up"
        >
          Abstract/Full Paper Submission
        </h1>
        <form
          ref={SubmissionRef}
          onSubmit={HandleSubmission}
          data-aos="fade-up"
          className="space-y-4 md:w-3/4 rounded-2xl shadow-2xl md:p-10"
        >
          <div>
            <label className="text-gray-800 font-semibold">
              Submission Type:
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" name="Submission_type" value="Abstract" />{" "}
                Abstract
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="Submission_type" value="Full paper" />{" "}
                Full paper
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-800 font-semibold">
                Title of the Paper:
              </label>
              <input
                type="text"
                name="paper_title"
                required
                className="w-full p-2 border border-gray-500 outline-none rounded"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold">
                Author Name:
              </label>
              <input
                type="text"
                name="authorName"
                required
                className="w-full p-2 border border-gray-500 outline-none rounded"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              Co-author Names:
            </label>
            <input
              type="text"
              name="CoAuthorName"
              className="w-full p-2 border border-gray-500 outline-none rounded"
            />
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              Corresponding Author Email:
            </label>
            <input
              type="email"
              name="correspondingEmail"
              required
              className="w-full p-2 border border-gray-500 outline-none rounded"
            />
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              Mobile Number (With Country Code):
            </label>
            <PhoneInput
              defaultCountry="US"
              value={mobile}
              onChange={setMobile}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              WhatsApp/Viber Number:
            </label>
            <input
              type="tel"
              name="whatsappNumber"
              pattern="[0-9]*"
              inputMode="numeric"
              className="w-full p-2 border border-gray-500 outline-none rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-800 font-semibold">
                LinkedIn URL:
              </label>
              <input
                type="url"
                name="linkedinURL"
                className="w-full p-2 border border-gray-500 outline-none rounded"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold">
                Facebook URL:
              </label>
              <input
                type="url"
                name="facebookURL"
                className="w-full p-2 border border-gray-500 outline-none rounded"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              Presentation Category:
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" name="presentationCategory" value="oral" />{" "}
                Oral
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="presentationCategory"
                  value="poster"
                />{" "}
                Poster
              </label>
            </div>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              Presentation Type:
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" name="presentationType" value="Virtual" />{" "}
                Virtual
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="presentationType" value="Physical" />{" "}
                Physical
              </label>
            </div>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              University/Institution Name:
            </label>
            <input
              type="text"
              name="Institution_Name"
              required
              className="w-full p-2 border border-gray-500 outline-none rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-800 font-semibold">Department:</label>
              <input
                type="text"
                name="Department"
                required
                className="w-full p-2 border border-gray-500 outline-none rounded"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold">
                Designation:
              </label>
              <input
                type="text"
                name="designation"
                required
                className="w-full p-2 border border-gray-500 outline-none rounded"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              Publication Required:
            </label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" name="Publication_Required" value="yes" />{" "}
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="Publication_Required" value="no" /> No
              </label>
            </div>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">File Upload:</label>
            <input
              type="file"
              accept=".doc,.docx"
              name="file"
              onChange={handleFileChange}
              required
              className="w-full p-2 border border-gray-500 outline-none rounded"
            />
          </div>

          <div>
            <label className="text-gray-800 font-semibold">
              How did you know about the conference?
            </label>
            <textarea
              name="conferenceSource"
              rows={2}
              className="w-full p-2 border border-gray-500 outline-none rounded"
            ></textarea>
          </div>

          <div>
            <label className="text-gray-800 font-semibold">Message:</label>
            <textarea
              name="message"
              rows={2}
              className="w-full p-2 border border-gray-500 outline-none rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit Your Paper
          </button>
        </form>
      </section>
      <style>
        {`
        .PhoneInputInput {
          padding: 0.5rem;
          border: 1px solid #6b7280;
          outline: none;
          border-radius: 0.375rem;
        }
        
      `}
      </style>
    </>
  );
};

export default Submission;
