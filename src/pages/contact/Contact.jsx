import React, { useState } from "react";
import image from "../../assets/contact/6876640.jpg";
import svg_prfile from "../../assets/contact/undraw_professional-woman-avatar_ivds.svg";
import Contactform from "./Contactform";
import Enquiry from "./Enquiry";
const Contact = () => {
  const [popup, setPopup] = useState(false);

  return (
    <section>
      <div className="p-5 flex flex-col md:flex-row justify-center items-center">
        <div className="md:p-10 md:w-1/2 w-full">
          <img
            data-aos="fade-right"
            className="object-center object-cover"
            src={image}
            alt="partner_image"
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center space-y-5 p-5 md:w-1/2 w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-teal-600">
            Partner with CERADA Today
          </h2>
          <div className="space-y-3">
            <h3 className="text-lg text-amber-600 font-black">
              Explore Opportunities
            </h3>
            <p className="text-md text-justify font-medium">
              Discover how CERADA sponsorship can benefit your organization. We
              look forward to partnering with you and creating a memorable and
              impactful experience at the CERADA International Conference.
            </p>
            <p className="text-md text-justify font-medium">
              <span className="font-black">Contact Us:</span> Reach out to our
              team to discuss customized sponsorship and exhibition packages at{" "}
              <a
                href="mailto:collaboration@confworld.org"
                className="text-blue-500 underline hover:text-blue-600"
              >
                collaboration@confworld.org
              </a>
              .
              <br />
              For more information or to secure your spot, please contact us
              today.
            </p>
          </div>
          <a
            className="bg-amber-600 hover:bg-amber-700 rounded-full py-2 px-3 text-white"
            onClick={() => setPopup(true)}
          >
            Ask Enquiries {">"}
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="content-center flex flex-col md:flex-row justify-center items-center gap-5 p-5"
      >
        <div
          data-aos="zoom-in"
          className="md:w-xl flex flex-col md:flex-row justify-center items-center gap-3 bg-white p-5 rounded-lg shadow-md"
        >
          <img
            className="w-36 object-center object-cover shadow-md rounded-full"
            src={svg_prfile}
            alt="svg_prfile"
          />
          <div>
            <h3 className="text-xl font-semibold text-fuchsia-800">
              Academic Partnership, Sponsorship and Promotional activities:
            </h3>
            <p className="text-lg font-base mt-4">
              <span className="font-medium">Name:</span> Ms.Suhana S
            </p>
            <p className="text-lg font-base">
              <span className="font-medium">Mobile:</span> +91 8610656424
            </p>
            <p className="text-lg font-base">
              <span className="font-medium">E-mail:</span>{" "}
              <a
                href="mailto:collaboration@confworld.org"
                className="text-blue-600 underline hover:text-blue-700"
              >
                collaboration@confworld.org
              </a>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-auto flex flex-col md:flex-row justify-center items-center gap-3 bg-white p-5 rounded-lg shadow-md"
        >
          <img
            className="w-36 object-center object-cover shadow-md rounded-full"
            src={svg_prfile}
            alt="svg_prfile"
          />
          <div>
            <h3 className="text-xl font-semibold text-fuchsia-800">
              For any WCMRP queries, please contact:
            </h3>
            <div className="flex flex-col md:flex-row gap-5 mt-4">
              <div>
                <p className="text-lg font-base">
                  <span className="font-medium">Name:</span>Ms. Aishwarya S
                </p>
                <p className="text-lg font-base">
                  <span className="font-medium">Mobile:</span> +91 8072381719
                </p>
                <p className="text-lg font-base">
                  <span className="font-medium">E-mail:</span>{" "}
                  <a
                    href="mailto:info@wcmrp.com"
                    className="text-blue-600 underline hover:text-blue-700"
                  >
                    info@wcmrp.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-lg font-base">
                  <span className="font-medium">Name:</span> Ms. Malathy G
                </p>
                <p className="text-lg font-base">
                  <span className="font-medium">Mobile:</span> +91 6383055014
                </p>
                <p className="text-lg font-base">
                  <span className="font-medium">E-mail:</span>{" "}
                  <a
                    href="mailto:info@wcmrp.com"
                    className="text-blue-600 underline hover:text-blue-700"
                  >
                    info@wcmrp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Contactform />
      </div>
      {popup && <Enquiry setPopup={setPopup} />}
    </section>
  );
};

export default Contact;
