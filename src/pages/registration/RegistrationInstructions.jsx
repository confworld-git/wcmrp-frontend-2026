import React from "react";
import image_1 from "../../assets/RegistrationInstructions/10075633.jpg";
import image_2 from "../../assets/RegistrationInstructions/4966434.jpg";
import image_3 from "../../assets/RegistrationInstructions/5214643.jpg";
import image_4 from "../../assets/RegistrationInstructions/4714353.jpg";

const RegistrationInstructions = () => {
  const registrationSteps = [
    {
      title: "Payment",
      description: "Complete your payment for the conference",
      image: image_1,
    },
    {
      title: "Download Registration Form",
      description: "After making your payment, download the Registration Form",
      image: image_2,
    },
    {
      title: "Fill Out the Form",
      description: "Complete all required fields in the Registration Form",
      image: image_3,
    },
    {
      title: "Submit Registration",
      description:
        "Email the filled-out Registration Form along with your payment information to",
      email: "info@wcmrp.com",
      image: image_4,
    },
  ];
  const registrationGuidelines = [
    {
      title: "📩 Payment Notification",
      description:
        "Registered members must inform us about their payments immediately via E-mail.",
    },
    {
      title: "🧾 Proof of Payment",
      description:
        "After completing registration, every participant is required to email a scanned copy of the registration fee receipt or transaction proof to us immediately.",
    },
    {
      title: "📑 Paper Submission",
      description:
        "No modifications to the paper will be accepted after the final submission date.",
    },
    {
      title: "👥 Author Limit",
      description:
        "Only one author and one co-author are allowed per registration.",
    },
    {
      title: "⏳ Late Registration",
      description:
        "If you need to register after the deadlines, please contact the coordinator as soon as possible.",
    },
    {
      title: "📝 Form Submission",
      description:
        "After making your payment, download the Registration Form, fill it out and email it to us at info@wcmrp.com along with your payment information.",
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
              className="text-indigo-500 underline hover:text-indigo-600"
            >
              {part}
            </a>
          );
        }
        return part;
      });
  };

  return (
    <section>
      <div className="space-y-5 p-5">
        <h2
          data-aos="zoom-in"
          className="text-center mt-5 text-2xl md:text-3xl font-bold text-indigo-500"
        >
          Registration Instructions
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 rounded-2xl p-4 gap-4">
          {registrationSteps.map((step, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="md:w-100 md:h-80 flex flex-col text-center justify-start items-center gap-3 bg-white p-4 rounded-2xl shadow-md"
            >
              <div className="w-40 h-40 rounded-full shadow-lg overflow-hidden">
                <img loading="lazy" src={step.image} alt={step.title} />
              </div>
              <h3 className="text-lg text-orange-500 font-semibold">
                {step.title}
              </h3>
              <p className="text-md">
                {step.description}
                {step.email ? (
                  <a href={`mailto:${step.email}`} className="text-purple-700">
                    {" "}
                    {step.email}
                  </a>
                ) : (
                  ""
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium">
          <span className="text-red-600">Important:</span> Please note that the
          payee is responsible for all bank charges.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center p-5 md:py-10 bg-teal-50"
      >
        <h2
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-bold text-indigo-500 mt-5"
        >
          Registration Guidelines
        </h2>
        <div className="space-y-5 md:p-5 md:w-9/12 mx-auto">
          {registrationGuidelines.map((guideline, index) => (
            <div data-aos="zoom-out" key={index}>
              <div className="p-5 bg-teal-100 shadow-md rounded-2xl my-5 hover:shadow-xl hover:scale-103 transition-all duration-300 ease-in-out">
                <p className="text-lg">
                  <span className="text-violet-500 font-semibold">
                    {guideline.title}
                  </span>
                  <br /> {renderDescription(guideline.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p data-aos="fade-up" className="text-md md:text-lg">
          <span className="text-lg text-orange-500 font-bold">Note:</span> The
          payee is responsible for all bank charges.
        </p>
      </div>
    </section>
  );
};

export default RegistrationInstructions;
