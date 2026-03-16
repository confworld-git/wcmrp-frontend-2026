import React, { useState } from "react";
import logo from "../assets/logo.jpg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#0057B7]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center justify-center">
            <img
              loading="lazy"
              src={logo}
              className="w-50 h-20"
              alt="WCMRP-Logo"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <Items />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {/* {isMenuOpen && ( */}
      <>
        {/* Overlay */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed inset-0 bg-black/30 backdrop-blur-lg z-40`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`block md:hidden fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-4 transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }   duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>

          {/* Sidebar Links */}
          <Items />
          {/* <ul className="mt-6 space-y-4 text-gray-800">
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/AboutWCMRP"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/SessionTracks"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Session Tracks
                </a>
              </li>
              <li>
                <a
                  href="/Publication"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Publication
                </a>
              </li>
              <li>
                <a
                  href="/Submission"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Submission
                </a>
              </li>
              <li>
                <a
                  href="/RegistrationFee"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Registration
                </a>
              </li>
              <li>
                <a href="/Venue" className="block px-4 py-2 hover:bg-gray-200">
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/Login"
                  className="block px-4 py-2 text-white bg-[#B22222] rounded-lg hover:bg-[#ff3a33] text-center"
                >
                  Login
                </a>
              </li>
            </ul> */}
        </div>
      </>
      {/* )} */}
    </>
  );
}

export default NavBar;

const Items = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <ul className="flex flex-col justify-center items-center md:flex-row gap-2 text-[14px] font-semibold md:text-[#FBF8EF] md:dark:text-white">
      {/* <li>
        <a href="/" className="py-2 px-3 hover:text-[#87CEEB]">
          Home
        </a>
      </li> */}
      <li className="md:relative">
        <a
          onClick={() => toggleDropdown("about")}
          // href="/AboutWCMRP"
          className="flex flex-row justify-center items-center py-2 px-3 hover:text-[#87CEEB]"
        >
          About
          <svg
            className="w-2.5 h-2.5 ml-2"
            fill="none"
            viewBox="0 0 10 6"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </a>
        {openDropdown === "about" && (
          <ul className="md:absolute md:z-10 left-0 mt-2 md:w-48 md:bg-white md:text-gray-700 md:shadow-lg md:rounded-lg md:overflow-hidden">
            <li>
              <a
                href="/AboutWCMRP"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                About WCMRP
              </a>
            </li>
            <li>
              <a
                href="/AboutOrganizer"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                About Organizer
              </a>
            </li>
            <li>
              <a href="/Speakers" className="block px-4 py-2 hover:bg-gray-200">
                Speakers
              </a>
            </li>
            <li>
              <a
                href="/OrganizingCommitteeMembers"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Organizing Committee Members
              </a>
            </li>
            <li>
              <a
                href="/ApplyingForOrganizingCommitteeMembers"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Apply for Organizing Committee Members
              </a>
            </li>
          </ul>
          // <ul className="absolute z-1 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
          //   <li>
          //     <a
          //       href="/AboutWCMRP"
          //       className="block px-4 py-2 hover:bg-gray-200"
          //     >
          //       About WCMRP
          //     </a>
          //   </li>
          //   <li>
          //     <a
          //       href="/Team"
          //       className="block px-4 py-2 hover:bg-gray-200"
          //     >
          //       Our Team
          //     </a>
          //   </li>
          // </ul>
        )}
      </li>
      <li className="md:relative">
        <a
          onClick={() => toggleDropdown("session")}
          // href="/SessionTracks"
          className="flex flex-row justify-center items-center py-2 px-3 hover:text-[#87CEEB]"
        >
          Session Tracks
          <svg
            className="w-2.5 h-2.5 ml-2"
            fill="none"
            viewBox="0 0 10 6"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </a>
        {openDropdown === "session" && (
          <ul className="md:absolute md:z-10 left-0 mt-2 md:w-48 md:bg-white md:text-gray-700 md:shadow-lg md:rounded-lg md:overflow-hidden">
            <li>
              <a
                href="/SessionTracks"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Session Tracks / Call for Papers
              </a>
            </li>
            <li>
              <a
                href="/EssentialDownloads"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Essential Downloads
              </a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="/Publication" className="py-2 px-3 hover:text-[#87CEEB]">
          Publication
        </a>
      </li>
      <li className="md:relative">
        <a
          onClick={() => toggleDropdown("submission")}
          // href="/Submission"
          className="flex flex-row justify-center items-center py-2 px-3 hover:text-[#87CEEB]"
        >
          Submission
          <svg
            className="w-2.5 h-2.5 ml-2"
            fill="none"
            viewBox="0 0 10 6"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </a>
        {openDropdown === "submission" && (
          <ul className="md:absolute md:z-10 left-0 mt-2 md:w-48 md:bg-white md:text-gray-700 md:shadow-lg md:rounded-lg md:overflow-hidden">
            <li>
              <a
                href="Submission"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Abstract/Full paper submission
              </a>
            </li>
            <li>
              <a
                href="/SubmissionGuidelines"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Submission Guidelines
              </a>
            </li>
          </ul>
        )}
      </li>
      <li className="md:relative">
        <a
          onClick={() => toggleDropdown("registration")}
          // href="/RegistrationFee"
          className="flex justify-center items-center py-2 px-3 hover:text-[#87CEEB]"
        >
          Registration
          <svg
            className="w-2.5 h-2.5 ml-2"
            fill="none"
            viewBox="0 0 10 6"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </a>
        {openDropdown === "registration" && (
          <ul className="md:absolute md:z-10 left-0 mt-2 md:w-48 md:bg-white md:text-gray-700 md:shadow-lg md:rounded-lg md:overflow-hidden">
            <li>
              <a
                href="/RegistrationFee"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Registration Fee
              </a>
            </li>
            <li>
              <a
                href="/AvailablePayments"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Available Payments
              </a>
            </li>
            <li>
              <a
                href="/RegistrationInstructions"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Registration Instructions
              </a>
            </li>
            <li>
              <a
                href="/TermsAndConditions"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="/Sponsors" className="py-2 px-3 hover:text-[#87CEEB]">
          Exhibits and Sponsors
        </a>
      </li>
      <li>
        <a href="/Venue" className="py-2 px-3 hover:text-[#87CEEB]">
          Venue
        </a>
      </li>
      <li>
        <a href="/faq" className="py-2 px-3 hover:text-[#87CEEB]">
          FAQ
        </a>
      </li>
      <li>
        <a href="/Contact" className="py-2 px-3 hover:text-[#87CEEB]">
          Contact
        </a>
      </li>
      <li>
        <a
          href="/Login"
          className="py-2 px-4 text-white bg-[#B22222] rounded-sm hover:bg-[#ff3a33]"
        >
          Login
        </a>
      </li>
    </ul>
  );
};
