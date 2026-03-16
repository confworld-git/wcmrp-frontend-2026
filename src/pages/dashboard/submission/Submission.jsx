"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { handleDownload, HandleExcelDownload } from "../utils/utils"
import { toaster } from "evergreen-ui"

const Submission = () => {
  const [submissionCount, setSubmissionCount] = useState([])

  const handleApi = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/paperSubmission`, {
        withCredentials: true,
      })
      if (res.status === 200) {
        setSubmissionCount(res.data.data)
        toaster.success(res.data.message)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      toaster.danger(error)
    }
  }

  useEffect(() => {
    handleApi()
  }, [])

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-start items-start p-3">
        <div className="w-full flex justify-between items-start p-3">
          <h1 className="text-xl font-bold my-3">Paper Submissions Data</h1>
          <button
            className="py-2 px-4 text-white font-medium rounded-md bg-green-500 hover:bg-green-600"
            onClick={() => HandleExcelDownload(submissionCount, "WCMRP Submission Data")}
          >
            Download Xlsx
          </button>
        </div>
        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead>
              <tr className="bg-indigo-500 text-white text-left">
                <th className="p-2 border border-gray-300">Submission Type</th>
                <th className="p-2 border border-gray-300">Submission ID</th>
                <th className="p-2 border border-gray-300">Paper Title</th>
                <th className="p-2 border border-gray-300">Author Name</th>
                <th className="p-2 border border-gray-300">Co-Author Name</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">Mobile Number</th>
                <th className="p-2 border border-gray-300">WhatsApp Number</th>
                <th className="p-2 border border-gray-300">Presentation Category</th>
                <th className="p-2 border border-gray-300">Presentation Type</th>
                <th className="p-2 border border-gray-300">Institution Name</th>
                <th className="p-2 border border-gray-300">Department</th>
                <th className="p-2 border border-gray-300">Designation</th>
                <th className="p-2 border border-gray-300">Publication Required</th>
                <th className="p-2 border border-gray-300">File</th>
              </tr>
            </thead>
            <tbody>
              {submissionCount.map((submission) => (
                <tr key={submission._id} className="hover:bg-gray-100 transition-colors">
                  <td className="p-2 border border-gray-300">{submission.Submission_type}</td>
                  <td className="p-2 border border-gray-300">{submission.SubmissionID}</td>
                  <td className="p-2 border border-gray-300">{submission.paper_title}</td>
                  <td className="p-2 border border-gray-300">{submission.authorName}</td>
                  <td className="p-2 border border-gray-300">{submission.CoAuthorName}</td>
                  <td className="p-2 border border-gray-300">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${submission.correspondingEmail}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {submission.correspondingEmail}
                    </a>
                  </td>
                  <td className="p-2 border border-gray-300">{submission.mobileNumber}</td>
                  <td className="p-2 border border-gray-300">{submission.whatsappNumber}</td>
                  <td className="p-2 border border-gray-300">{submission.presentationCategory}</td>
                  <td className="p-2 border border-gray-300">{submission.presentationType}</td>
                  <td className="p-2 border border-gray-300">{submission.Institution_Name}</td>
                  <td className="p-2 border border-gray-300">{submission.Department}</td>
                  <td className="p-2 border border-gray-300">{submission.designation}</td>
                  <td className="p-2 border border-gray-300">{submission.Publication_Required ? "Yes" : "No"}</td>
                  <td
                    className="p-2 border border-gray-300 text-green-500 cursor-pointer"
                    onClick={() =>
                      handleDownload(submission.file.buffer, submission.file.mimetype, submission.file.originalname)
                    }
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
  )
}

export default Submission
