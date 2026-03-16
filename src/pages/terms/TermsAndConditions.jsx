import React from "react";
import { FaFeatherPointed } from "react-icons/fa6";
const TermsAndConditions = () => {
  const termsAndConditions = [
    "By registering for the conference, you hereby agree with the terms and conditions.",
    "The organization reserves the right to make alterations to the program, date and/or venue at any time without prior notice.",
    "The organization is not responsible for any loss or damage as a result of substitution, alteration, postponement or cancellation of an event due to causes beyond its control including without limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes, terrorism, strikes or hostilities.",
    "The organization reserves the right and holds the sole discretion to cancel any conference at any time in case of any unavoidable and unforeseeable circumstances. The organizer will have no further liability to the client.",
    "Registrations remain valid for the event with new dates or for future editions if the conference has to be postponed by causes beyond organizer control. The refund policy is not applicable to this condition.",
    "In the event of cancellation, the organization will use reasonable and suitable alternative arrangements such as posting the news of cancellation on the appropriate event website to alert those who have booked or purchased tickets to attend the event.",
    "Delegates are responsible for checking this information prior to the event. We advise you to keep checking the website for updates of our conference.",
    "The organizers will not accept any liability for personal injuries or for loss or damage to property belonging to the delegates, either during or as a result of the conference.",
  ];

  const privacyPolicy = [
    {
      section: "Information",
      description:
        "We collect personal information that you voluntarily provide to us when registering for conferences, subscribing to newsletters, submitting inquiries or participating in surveys or forums on https://wcmrp.com/ . This information may include:",
      details: [
        "Name",
        "Email address",
        "Contact number",
        "Mailing address",
        "Payment information",
        "Any other information you provide voluntarily",
      ],
    },
    {
      section: "How We Use Your Information",
      description:
        "We use the information we collect for the following purposes:",
      details: [
        "To process registrations for events and conferences",
        "To communicate with you regarding updates, announcements and relevant event information",
        "To respond to inquiries or provide customer support",
        "To manage website operations and improve our services",
        "To process payments and billing for conference participation or services",
        "For marketing purposes (only if you have given explicit consent)",
      ],
    },
    {
      section: "Sharing of Information",
      description:
        "We do not sell, trade or rent your personal information to third parties. However, we may share your information with:",
      details: [
        "Service providers and vendors assisting us with conference logistics, payment processing and website management.",
        "Law enforcement agencies or governmental bodies when required by law.",
      ],
    },
    {
      section: "Your Rights",
      description: "You have the right to:",
      details: [
        "Access, update or delete your personal information.",
        "Opt-out of marketing communications.",
        "Request the restriction of processing of your data in certain circumstances.",
        "To exercise any of these rights, please contact us at info@wcmrp.com",
      ],
    },
    {
      section: "Changes to This Privacy Policy",
      description:
        "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page and we encourage you to review this page regularly to stay informed.",
    },
    {
      section: "Contact Us",
      description:
        "If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:",
      contact: {
        Email: "info@wcmrp.com",
        Phone: "+91 8072381719",
      },
    },
  ];

  const renderDescription = (text) => {
    return text
      .split(
        /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
      )
      .map((part, index) => {
        if (part.match(/https?:\/\/[^\s]+/)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline hover:text-amber-300"
            >
              {part}
            </a>
          );
        } else if (
          part.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
        ) {
          return (
            <a
              key={index}
              href={`mailto:${part}`}
              className="text-amber-200 underline hover:text-amber-300"
            >
              {part}
            </a>
          );
        }
        return part;
      });
  };

  return (
    <section className="p-2 md:p-5 flex flex-col justify-center items-center gap-10">
      <div
        data-aos="fade-up"
        className="bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 text-white p-3 rounded-lg shadow-lg"
      >
        <h2
          data-aos="fade-up"
          className="bg-white py-2 my-3 text-violet-600 rounded-md shadow-md text-2xl md:text-3xl text-center font-bold"
        >
          Terms and Conditions
        </h2>
        <ul data-aos="fade-up" className="md:p-5 space-y-2">
          {termsAndConditions.map((item, index) => (
            <div key={index} className="flex flex-row space-x-3 p-3">
              <div>
                <FaFeatherPointed className="text-lg md:text-xl" />
              </div>
              <li className="text-justify">{item}</li>
            </div>
          ))}
        </ul>
      </div>
      <div
        data-aos="fade-up"
        className="bg-linear-to-l from-blue-500 via-cyan-500 to-teal-500 text-white p-3 rounded-lg shadow-lg"
      >
        <h2
          data-aos="fade-up"
          className="bg-white py-2 my-3 text-violet-600 rounded-md shadow-md text-2xl md:text-3xl text-center font-bold"
        >
          Privacy Policy
        </h2>
        <ul
          data-aos="fade-up"
          className="list list-decimal p-2 md:p-5 space-y-2"
        >
          {privacyPolicy.map((item, index) => (
            <li key={index} className="text-xl text-medium  space-y-2">
              <h3 className="">{item.section}</h3>
              <div className="text-base font-normal">
                <p>{renderDescription(item.description)}</p>
                {item.details && (
                  <div className="ml-10">
                    {item.details.map((detail, index) => (
                      <ul key={index} className="list list-disc space-y-2">
                        <li>{renderDescription(detail)}</li>
                      </ul>
                    ))}
                  </div>
                )}
                {item.contact && (
                  <div>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${item.contact.Email}`}
                        className="text-amber-200 underline hover:text-amber-300"
                      >
                        {item.contact.Email}
                      </a>
                    </p>
                    <p className="">Phone: {item.contact.Phone}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        data-aos="fade-up"
        className="bg-linear-to-br from-blue-500 via-cyan-500 to-teal-500 text-white p-3 rounded-lg shadow-lg"
      >
        <h2
          data-aos="fade-up"
          className="bg-white py-2 my-3 text-violet-600 rounded-md shadow-md text-2xl md:text-3xl text-center font-bold"
        >
          Cancellation Policy
        </h2>
        <p>
          If the registrant is unable to attend, please note the following
          cancellation policy, which takes into account advance payments made
          for venue, printing, shipping, hotels and other overheads:
        </p>
        <ul className="list list-disc p-2 ml-10 space-y-2">
          <li className="">
            <span className="font-bold">50 Days Before Conference:</span> 40%
            refundable
          </li>
          <li className="">
            <span className="font-bold">30-40 Days Before Conference:</span> 35%
            refundable
          </li>
          <li className="">
            <span className="font-bold">
              Less Than 30 Days Before Conference:
            </span>{" "}
            No refunds will be issued
          </li>
        </ul>
        <p className="font-bold">Refund Policy</p>
        <ul className="list list-disc ml-10 p-2">
          <li>
            <span className="font-bold">Transfer of Registration:</span>{" "}
            Registration can be transferred to another event organized by the
            same organization of the registrant’s choice.
          </li>
        </ul>
        <p className="">
          <span className="font-bold">Note:</span>Refunds will be processed 2-4
          weeks after the conference, excluding transaction charges.
          Refund/Cancellation Policy is not applicable if the conference is
          postponed due to natural disasters or unpredictable activities beyond
          organizers control including without limitation, force majeure,
          natural disasters, sabotage, accident, trade or industrial disputes,
          terrorism, strikes or hostilities.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="bg-linear-to-tl from-blue-500 via-cyan-500 to-teal-500 text-white p-3 rounded-lg shadow-lg"
      >
        <h2
          data-aos="fade-up"
          className="bg-white py-2 my-3 text-violet-600 rounded-md shadow-md text-2xl md:text-3xl text-center font-bold"
        >
          VISA Information
        </h2>
        <p className="text-justify">
          Confworld Educational Research and Development Association (CERADA)
          will not directly contact embassies and consulates on behalf of visa
          applicants. All delegates or invitees should apply for a Business Visa
          only.
        </p>
        <p className="text-justify">
          Visa issues, including the inability to obtain a visa, do not fall
          under the consideration of the cancellation policy of the Confworld
          Educational Research and Development Association (CERADA).
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
