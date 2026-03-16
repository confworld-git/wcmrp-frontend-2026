import React, { useRef, useState } from "react";
import './Contactform.css';
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import img from "../../assets/istockphoto-1248207920-612x612.jpg";

const Contactform = () => {
  const ContactRef = useRef();
  const [MobileNumber, setMobileNumber] = useState(null);

  const validateForm = (data) => {
    for (const key in data) {
      if (!data[key] || data[key].trim() === "") {
        toaster.warning(`Please fill out the ${key.replace(/_/g, " ")} field.`);
        return false;
      }
    }
    return true;
  };

  const HandleContactData = async (e) => {
    e.preventDefault();
    const formData = new FormData(ContactRef.current);
    const ContactData = Object.fromEntries(formData.entries());
    ContactData.Contact_Number = MobileNumber;

    const isValid = validateForm(ContactData);
    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        ContactData
      );
      if (response) {
        ContactRef.current.reset();
        setMobileNumber("");
        toaster.success(response.data.message);
      }
    } catch (error) {
      toaster.danger("Something's Wrong");
    }
  };

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex justify-center items-center bg-green-50 py-12 px-2 md:px-0"
      >
        <div
          className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-5 md:p-8 bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.90) 100%), url(${img})`,
          }}
        >
          <h1 className="text-2xl font-semibold text-amber-600 text-center mb-6">
            <span className="text-teal-500">Fill the form to</span> Contact Us
          </h1>
          <form
            ref={ContactRef}
            onSubmit={HandleContactData}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="First_Name"
                placeholder="First Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <input
                type="text"
                name="Last_Name"
                placeholder="Last Name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <PhoneInput
              onChange={(e) => setMobileNumber(e)}
              value={MobileNumber}
              defaultCountry="US"
              id="Mobile_Number"
              placeholder="Whatsapp Number / Viber Number With Country Code"
              className="w-full"
            />
            <textarea
              rows={3}
              name="Message"
              placeholder="How We Can Help You?"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            ></textarea>
            <button className="w-full bg-teal-500 text-white py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Contactform;
