"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { toaster } from "evergreen-ui"
import { HandleExcelDownload } from "../utils/utils"

const Registration = () => {
  const [registrationCount, setRegistrationCount] = useState([])

  const handleApi = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/registration`, {
        withCredentials: true,
      })
      if (res.status === 200) {
        setRegistrationCount(res.data.data)
        toaster.success(res.data.message)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      toaster.danger(error)
    }
  }

  console.log(registrationCount)

  useEffect(() => {
    handleApi()
  }, [])

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-start items-start p-3">
        <div className="w-full flex justify-between items-start p-3">
          <h1 className="text-xl font-bold my-3">Registration Data</h1>
          <button
            className="py-3 px-5 text-white font-medium rounded-md bg-green-500 hover:bg-green-600 shadow-md"
            onClick={() => HandleExcelDownload(registrationCount, "WCMRP Registration Data")}
          >
            Download Xlsx
          </button>
        </div>
        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
          <table className="w-full border-collapse bg-white border border-gray-300">
            <thead>
              <tr className="bg-indigo-600 text-white text-base">
                <th className="p-2 border border-gray-300">Title</th>
                <th className="p-2 border border-gray-300">First Name</th>
                <th className="p-2 border border-gray-300">Last Name</th>
                <th className="p-2 border border-gray-300">Certificate Name</th>
                <th className="p-2 border border-gray-300">Date of Birth</th>
                <th className="p-2 border border-gray-300">Nationality</th>
                <th className="p-2 border border-gray-300">Department</th>
                <th className="p-2 border border-gray-300">Institution</th>
                <th className="p-2 border border-gray-300">Presentation Category</th>
                <th className="p-2 border border-gray-300">Presentation Type</th>
                <th className="p-2 border border-gray-300">Participant Category</th>
                <th className="p-2 border border-gray-300">Status</th>
                <th className="p-2 border border-gray-300">Amount (USD)</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">Contact</th>
              </tr>
            </thead>
            <tbody>
              {registrationCount.map((entry) => (
                <tr key={entry._id} className="hover:bg-gray-200 transition-colors duration-200 text-sm">
                  <td className="p-2 border border-gray-300">{entry.Title || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.first_name || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.last_name || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.certificate_name || "N/A"}</td>
                  <td className="p-2 border border-gray-300">
                    {entry.DOB ? new Date(entry.DOB).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="p-2 border border-gray-300">{entry.nationality || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.department || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.institution || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.presentation_Category || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.presentation_Type || "N/A"}</td>
                  <td className="p-2 border border-gray-300">{entry.participant_category || "N/A"}</td>
                  <td
                    className={`${
                      entry.status === "created"
                        ? "bg-yellow-300"
                        : entry.status === "Payment Paid"
                          ? "bg-green-500"
                          : "bg-red-500"
                    } p-2 border border-gray-300`}
                  >
                    {entry.status || "N/A"}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {typeof entry.selectedFee === "object"
                      ? JSON.stringify(entry.selectedFee)
                      : entry.selectedFee || "N/A"}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {entry.email ? (
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${entry.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {entry.email}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="p-2 border border-gray-300">{entry.number || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Registration
