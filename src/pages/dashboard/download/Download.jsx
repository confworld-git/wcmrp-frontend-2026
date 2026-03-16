import React, { useEffect, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { HandleExcelDownload } from "../utils/utils";

const Download = () => {
  const [downloadCount, setDownloadCount] = useState([]);

  const handleApi = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/download`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setDownloadCount(res.data.data);
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
          <h1 className="text-xl font-bold my-3">Brochure Download Data</h1>
          <button
            className="py-2 px-4 text-white font-medium rounded-md bg-green-500 hover:bg-green-600"
            onClick={() =>
              HandleExcelDownload(downloadCount, "WCMRP Download Data")
            }
          >
            Download Xlsx
          </button>
        </div>
        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead className="bg-indigo-500 text-white text-left">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Number</th>
                <th className="border border-gray-300 px-4 py-2">LinkedIn</th>
                <th className="border border-gray-300 px-4 py-2">Info</th>
              </tr>
            </thead>
            <tbody>
              {downloadCount.map((person, index) => {
                return (
                  <tr
                    key={person._id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {person.Name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {person.Email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {person.Number}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href={person.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        LinkedIn Profile
                      </a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {person.Info}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Download;
