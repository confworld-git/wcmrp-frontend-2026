import React, { useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toaster } from "evergreen-ui";
import axios from "axios";

const Enquiry = ({ setPopup }) => {
  const EnquiryRef = useRef();

  const HandleEnquiryData = async (e) => {
    e.preventDefault();
    const formData = new FormData(EnquiryRef.current);
    const EnquiryData = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/enquiry`,
        EnquiryData
      );
      if (response) {
        EnquiryRef.current.reset();
        setPopup(false);
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toaster.danger("Something's Wrong");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md bg-opacity-50 z-100">
      <div
        data-aos="fade-up"
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl relative"
      >
        <button
          onClick={() => setPopup(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <HiMiniXMark size={24} />
        </button>
        <h1 className="text-xl text-violet-500 font-semibold text-center mb-4">
          Enquiry Form
        </h1>
        <form
          ref={EnquiryRef}
          onSubmit={HandleEnquiryData}
          className="space-y-3"
        >
          <input
            type="text"
            required
            name="User_Name"
            placeholder="User Name"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          />
          <input
            type="email"
            required
            name="Email"
            placeholder="Enter Your Email"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          />
          <input
            type="tel"
            name="Contact_Number"
            required
            placeholder="Whatsapp Number With Country Code (e.g., +14155552671)"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          />
          <input
            type="text"
            required
            name="Preferred_Contact_Time"
            placeholder="Preferred Contact Time ( Morning, Afternoon or Evening )"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject of Enquiry"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          />
          <textarea
            rows={2}
            name="Message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          ></textarea>
          <textarea
            rows={2}
            name="Help_Description"
            placeholder="How We Can Help You?"
            className="w-full p-2 border border-gray-300 outline-none focus:border-gray-600 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
