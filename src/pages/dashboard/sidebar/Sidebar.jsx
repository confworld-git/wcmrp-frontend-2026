"use client"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { IoHomeSharp, IoPersonSharp, IoDocumentSharp, IoCallSharp, IoDownloadSharp, IoMailSharp } from "react-icons/io5"
import { HiOutlineLogout } from "react-icons/hi"
import { BsPeople } from "react-icons/bs"
import { MdRecordVoiceOver } from "react-icons/md"
import { toaster } from "evergreen-ui"

const Sidebar = ({ setIsMenuOpen }) => {
  const navigate = useNavigate()

  const logout = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
        withCredentials: true,
      })
      if (response.status === 200) {
        navigate("/")
        toaster.success(response.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="relative bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] rounded-2xl w-64 h-full p-4">
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-1 right-0 p-1.5 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <p className="text-lg font-bold mb-4">Dashboard Menu</p>
      <ul className="space-y-2">
        <Link to="/Dashboard" className="flex items-center space-x-2 hover:text-gray-300">
          <IoHomeSharp /> <span>Home</span>
        </Link>
        <Link to="Registration" className="flex items-center space-x-2 hover:text-gray-300">
          <IoPersonSharp /> <span>Registration</span>
        </Link>
        <Link to="Submission" className="flex items-center space-x-2 hover:text-gray-300">
          <IoDocumentSharp /> <span>Submission</span>
        </Link>
        <Link to="CommitteeMember" className="flex items-center space-x-2 hover:text-gray-300">
          <BsPeople /> <span>Committee Member</span>
        </Link>
        <Link to="Contact" className="flex items-center space-x-2 hover:text-gray-300">
          <IoCallSharp /> <span>Contact</span>
        </Link>
        <Link to="Downloads" className="flex items-center space-x-2 hover:text-gray-300">
          <IoDownloadSharp /> <span>Downloads</span>
        </Link>
        <Link to="CouponManagement" className="flex items-center space-x-2 hover:text-gray-300">
          <IoDownloadSharp /> <span>Coupon </span>
        </Link>
        <Link to="Enquiries" className="flex items-center space-x-2 hover:text-gray-300">
          <IoMailSharp /> <span>Enquiries</span>
        </Link>
        {/* Updated links for speakers with hash navigation */}
        <Link to="Speakers#add-speakers" className="flex items-center space-x-2 hover:text-gray-300">
          <MdRecordVoiceOver /> <span>Add Speaker</span>
        </Link>
        <Link to="Speakers#add-ocm" className="flex items-center space-x-2 hover:text-gray-300">
          <MdRecordVoiceOver /> <span>Add OCM</span>
        </Link>
      </ul>
      <button
        onClick={() => logout()}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center space-x-2"
      >
        <HiOutlineLogout /> <span>Log Out</span>
      </button>
    </div>
  )
}

export default Sidebar
