import React, { useEffect, useState } from "react";
import axios from "axios";
import { HandleExcelDownload } from "../utils/utils";
import { toaster } from "evergreen-ui";

const Contact = () => {
  const [contactCount, setContactCount] = useState([]);

  const handleApi = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/contact`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setContactCount(res.data.data);
        toaster.success(res.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toaster.danger(error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-start items-start p-3">
        <div className="w-full flex justify-between items-start p-3">
          <h1 className="text-xl font-bold my-3">Contact Data</h1>
          <button
            className="py-2 px-4 text-white font-medium rounded-md bg-green-500 hover:bg-green-600"
            onClick={() =>
              HandleExcelDownload(contactCount, "WCMRP Enquiry Data")
            }
          >
            Download Xlsx
          </button>
        </div>
        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead className="bg-indigo-500 text-white text-left">
              <tr>
                <th className="border border-gray-300 px-4 py-2">First Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">
                  Contact Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {contactCount.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.First_Name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.Last_Name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.Email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.Contact_Number}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.Message}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
