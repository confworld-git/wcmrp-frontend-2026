import React, { useEffect, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { HandleExcelDownload } from "../utils/utils";

const Enquiries = () => {
  const [enquiryCount, setEnquiryCount] = useState([]);

  const handleApi = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/enquiry`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setEnquiryCount(res.data.data);
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
    <section className="w-full flex justify-center items-center py-3">
      <div className="w-full flex flex-col justify-start items-start p-3">
        <div className="w-full flex justify-between items-start p-3">
          <h1 className="text-xl font-bold my-3">Enquiry Data</h1>
          <button
            className="py-2 px-4 text-white font-medium rounded-md bg-green-500 hover:bg-green-600"
            onClick={() =>
              HandleExcelDownload(enquiryCount, "WCMRP Enquiry Data")
            }
          >
            Download Xlsx
          </button>
        </div>
        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead>
              <tr className="bg-indigo-600 text-white text-left">
                <th className="p-3 border border-gray-300">User Name</th>
                <th className="p-3 border border-gray-300">Email</th>
                <th className="p-3 border border-gray-300">Contact Number</th>
                <th className="p-3 border border-gray-300">
                  Preferred Contact Time
                </th>
                <th className="p-3 border border-gray-300">Subject</th>
                <th className="p-3 border border-gray-300">Message</th>
                <th className="p-3 border border-gray-300">Help Description</th>
              </tr>
            </thead>
            <tbody>
              {enquiryCount.map((inquiry) => (
                <tr
                  key={inquiry._id}
                  className="hover:bg-gray-100 transition-colors border-t"
                >
                  <td className="p-3 border border-gray-300">
                    {inquiry.User_Name}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {inquiry.Email}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {inquiry.Contact_Number}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {inquiry.Preferred_Contact_Time}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {inquiry.Subject}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {inquiry.Message}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {inquiry.Help_Description}
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

export default Enquiries;
