import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin, 
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/logo/logo1.webp";

const Footer = () => {
  const navItems = [
    { title: "Home", link: "/#top" },
    { title: "About", link: "/AboutWCMRP" },
    { title: "Available Payment", link: "/AvailablePayments" },
    { title: "Instructions", link: "/RegistrationInstructions" },
    { title: "Terms & Conditions", link: "/TermsAndConditions" },
    { title: "Guidelines", link: "/SubmissionGuidelines" },
    { title: "Call for Papers", link: "/SessionTracks" },
    { title: "Paper Submission", link: "/Submission" },
    { title: "Publication", link: "/Publication" },
    { title: "Registration Fee", link: "/RegistrationFee" },
    { title: "Enquiries", link: "/Contact" },
  ];

  return (
    <footer className="footer bg-[#0A0D3C] text-white py-6">
      <div className="mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="text-left">
            <img
              loading="lazy"
              src={logo}
              alt="CERADA Logo"
              className="w-24 mb-4 bg-white p-2 "
            />
            <p className="text-sm font-bold">
              2<span className="align-super text-sm">nd</span> World Conference
              on Multidisciplinary Research and Practices (WCMRP-2026)
            </p>
            <p className="text-sm">
              <strong>Theme:</strong> "Integrating Knowledge Across Disciplines
              for Global Impact: Innovations, Challenges and Sustainable
              Solutions"
            </p>
            <p className="text-sm">
              <strong>Organized by:</strong> Confworld Educational Research and
              Development Association
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-4 text-left">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-md hover:text-[#ED8C24] cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Contact & Address */}
          <div className="text-right space-y-2">
            <p className="flex items-center space-x-2">
              <MdCall className="text-[#ED8C24]" /> <span>+91 8072381719</span>
            </p>
            <p className="flex items-center space-x-2">
              <MdEmail className="text-[#ED8C24]" /> <span>info@wcmrp.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <MdLocationOn className="text-[#ED8C24]" />{" "}
              <span>Kuala Lumpur, Malaysia</span>
            </p>
            <div className="bg-white text-black p-3 rounded-lg shadow-lg">
              <h3 className="font-bold">Organizer Address</h3>
              <p className="text-sm">
                No.147/383A, Second Floor, Paper Mills Road, Peravallur,
                Chennai-600082, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6 bg-[#112D65] py-3 text-center">
          <p className="text-lg font-semibold">Follow us on Social Media</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61560894663027"
              className="text-white text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://www.youtube.com/@Confworld"
              className="text-white text-2xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/infoconfworld/?hl=en"
              className="text-white text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/infoconfworld"
              className="text-white text-2xl"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/confworld-educational-research-and-development-association/"
              className="text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W"
              className="text-white text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm">
          Copyright &copy; 2026 CERADA. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
