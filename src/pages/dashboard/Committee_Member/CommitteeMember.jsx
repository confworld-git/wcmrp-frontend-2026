import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleDownload, HandleExcelDownload } from "../utils/utils";
import { toaster } from "evergreen-ui";

const CommitteeMember = () => {
  const [memberCount, setMemberCount] = useState([]);

  const handleApi = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/committeeMember`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setMemberCount(res.data.data);
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
          <h1 className="text-xl font-bold my-3">Committee Member Data</h1>
          <button
            className="py-2 px-4 text-white font-medium rounded-md bg-green-500 hover:bg-green-600"
            onClick={() =>
              HandleExcelDownload(memberCount, "WCMRP Member Data")
            }
          >
            Download Xlsx
          </button>
        </div>

        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead>
              <tr className="bg-indigo-500 text-white text-left">
                <th className="p-2 border border-gray-300">Title</th>
                <th className="p-2 border border-gray-300">First Name</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">Country</th>
                <th className="p-2 border border-gray-300">Contact Number</th>
                <th className="p-2 border border-gray-300">Member Category</th>
                <th className="p-2 border border-gray-300">Organization</th>
                <th className="p-2 border border-gray-300">Qualification</th>
                <th className="p-2 border border-gray-300">
                  Professional Experience
                </th>
                <th className="p-2 border border-gray-300">Department</th>
                <th className="p-2 border border-gray-300">Specialization</th>
                <th className="p-2 border border-gray-300">h-index</th>
                <th className="p-2 border border-gray-300">
                  Associated Cerada
                </th>
                <th className="p-2 border border-gray-300">Publications</th>
                <th className="p-2 border border-gray-300">SCI Published</th>
                <th className="p-2 border border-gray-300">Journals</th>
                <th className="p-2 border border-gray-300">Resume</th>
              </tr>
            </thead>
            <tbody>
              {memberCount.map((entry, index) => (
                <tr
                  key={entry._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="p-2 border border-gray-300">{entry.Title}</td>
                  <td className="p-2 border border-gray-300">
                    {entry.First_Name}
                  </td>
                  <td className="p-2 border border-gray-300">{entry.Email}</td>
                  <td className="p-2 border border-gray-300">
                    {entry.Country}
                  </td>
                  <td className="p-2 border border-gray-300">{entry.Number}</td>
                  <td className="p-2 border border-gray-300">
                    {entry.Member_Category}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Organization}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Qualification}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Professional_Experience}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Department}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Specialization}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.h_index}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Associated_Cerada}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Publication}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.SCI_Published}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.Journals}
                  </td>
                  <td
                    className="p-2 border border-gray-300"
                    onClick={() =>
                      handleDownload(
                        entry.Uploaded_File.buffer,
                        entry.Uploaded_File.mimetype,
                        entry.Uploaded_File.originalname
                      )
                    }
                    style={{ color: "green", cursor: "pointer" }}
                  >
                    Download
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

export default CommitteeMember;
