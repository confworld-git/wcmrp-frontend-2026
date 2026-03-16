import React, { useRef, useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import countries from "./countries";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { toaster } from "evergreen-ui";

const OCMform = () => {
  const OCMRef = useRef();
  const [value, setValue] = useState();

  const HandleOCM = async (e) => {
    e.preventDefault();

    const formData = new FormData(OCMRef.current);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const requiredFields = [
      "Title",
      "First_Name",
      "Email",
      "Country",
      "Number",
      "Member_Category",
      "Organization",
      "Qualification",
      "Professional_Experience",
      "Industry_Experience",
      "Department",
      "Specialization",
      "h_index",
      "Associated_Cerada",
      "Publication",
      "SCI_Published",
      "Journals",
      "Conference_Info",
      "file",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }

        if (value instanceof File) {
          if (value.size > 300 * 1024) {
            toaster.warning("File size must be less than 300KB.");
            return;
          }
        } else if (Array.isArray(value)) {
          for (const file of value) {
            if (file.size > 300 * 1024) {
              toaster.warning("Each file size must be less than 300KB.");
              return;
            }
          }
        }
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/committeeMember`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setValue("");
      OCMRef.current.reset();
      toaster.success(response.data.message);
    } catch (error) {
      console.error(error);
      toaster.danger("Something's wrong");
    }
  };

  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl text-indigo-500 font-bold text-center">
          Apply for Organizing Committee Members
        </h1>
        <form
          ref={OCMRef}
          onSubmit={HandleOCM}
          data-aos="fade-up"
          className="space-y-4 md:space-x-10 grid grid-cols-1 md:grid-cols-2 md:p-15"
        >
          <div>
            <label className="block font-medium">Title*</label>
            <select
              id="title"
              name="Title"
              defaultValue=""
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            >
              <option disabled value="">
                Select Title
              </option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Full Name*</label>
            <input
              type="text"
              id="first-name"
              name="First_Name"
              placeholder="Full Name"
              required
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Email*</label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              placeholder="Email"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">
              Whatsapp/Viber Contact Number*
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="US"
              name="Number"
              value={value}
              onChange={setValue}
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium" htmlFor="country">
              Country*
            </label>
            <select
              id="country"
              defaultValue=""
              name="Country"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            >
              <option disabled value="">
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.emoji} {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Member Category*</label>
            <select
              id="member-category"
              name="Member_Category"
              defaultValue=""
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            >
              <option disabled value="">
                Select Member Category
              </option>
              <option value="Advisory">Advisory</option>
              <option value="Scientific">Scientific</option>
              <option value="Hospitality">Hospitality</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">
              Name of the University/Institute/College/Organization*
            </label>
            <input
              type="text"
              id="organization"
              name="Organization"
              placeholder="Name of the Organization"
              required
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Department*</label>
            <input
              type="text"
              id="department"
              name="Department"
              required
              placeholder="Department"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Qualification*</label>
            <input
              type="text"
              id="qualification"
              name="Qualification"
              required
              placeholder="Qualification"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">
              Professional Background*
            </label>
            <input
              type="text"
              name="Professional_Experience"
              id="professional-experience"
              placeholder="Professional Experience"
              required
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Industry Background*</label>
            <input
              type="text"
              id="industry-experience"
              name="Industry_Experience"
              required
              placeholder="Industry Experience"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Area of Specialization*</label>
            <input
              type="text"
              id="specialization"
              required
              name="Specialization"
              placeholder="Specialization"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Associated with CERADA*</label>
            <input
              type="text"
              required
              id="associated-cerada"
              name="Associated_Cerada"
              placeholder="Yes/No"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">h-index*</label>
            <input
              type="number"
              id="h_index"
              name="h_index"
              required
              placeholder="h-index"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">
              No. of Scopus Publications*
            </label>
            <input
              type="text"
              required
              id="publications"
              name="Publication"
              placeholder="No. of Publications"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">
              No. of SCI/WoS Publications*
            </label>
            <input
              type="text"
              id="SCI-published"
              required
              name="SCI_Published"
              placeholder="Books Published"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">
              Editor/Reviewer in Journals*
            </label>
            <input
              type="text"
              id="journals"
              required
              name="Journals"
              placeholder="Editor/Reviewer in Journals"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">
              Upload CV* (Docx, Doc, Pdf)
            </label>
            <input
              type="file"
              name="file"
              id="upload-cv"
              accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            />
            <span className="text-sm text-gray-500">Less than 300KB</span>
          </div>

          <div>
            <label htmlFor="conference-info" className="block font-medium">
              How did you find out about the event?
            </label>
            <textarea
              id="conference-info"
              required
              name="Conference_Info"
              className="w-full p-2 border border-gray-300 focus:outline-1 rounded-md"
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md cursor-pointer hover:bg-blue-700 transition"
            />
          </div>
        </form>
      </div>
      <style>{`
      .PhoneInputInput {
        padding: 0.5rem;
        border: 1px solid #d1d5db;
        outline: 1px solid transparent;
        border-radius: 0.375rem;
      }
      `}</style>
    </>
  );
};

export default OCMform;
