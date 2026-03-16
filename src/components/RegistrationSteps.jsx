import React from "react";
import admittance from "../assets/registration_steps/qualitative-research_8992954.png";
import form from "../assets/registration_steps/shopping-list_952949.png";
import payment from "../assets/registration_steps/online-marketing_9163504.png";
import email from "../assets/registration_steps/email_4301638.png";
import arrow from "../assets/registration_steps/fast-forward_7740748.gif";

const RegistrationSteps = () => {
  const Steps = [
    {
      step: 1,
      description: "Choose Your Preferred Admittance Category.",
      image: admittance,
    },
    {
      step: 2,
      description: "Enter your details in the form.",
      image: form,
    },
    {
      step: 3,
      description: "Proceed to Payment Gateway.",
      image: payment,
    },
    {
      step: 4,
      description: "Get an official conference invitation letter.",
      image: email,
    },
  ];
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col justify-center items-center space-y-6 my-10"
    >
      <h1
        data-aos="fade-up"
        className="text-blue-500 text-2xl md:text-3xl font-black"
      >
        Registration Steps
      </h1>
      <div className="p-5 flex flex-col md:flex-row justify-center items-center gap-5">
        {Steps.map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col md:flex-row justify-center items-center gap-5"
          >
            <div className="w-64 h-64 flex flex-col justify-center items-center bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] hover:shadow-[0px_5px_30px_rgba(0,0,0,0.10)] transition-all duration-300 ease-in-out p-9 space-y-3 relative overflow-hidden">
              <div className="w-20 h-20 bg-violet-500 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-4 left-5 text-white text-2xl font-medium">
                  0{step.step}
                </p>
              </div>
              <div className="fill-violet-500 w-25">
                <img loading="lazy" src={step.image} alt={step.description} />
              </div>
              <h1 className="text-blue-700 font-bold text-center text-md">
                {step.description}
              </h1>
            </div>
            {index !== Steps.length - 1 && (
              <div className="w-12">
                <img
                  className="rotate-90 md:rotate-0"
                  src={arrow}
                  alt="gif_arrow"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegistrationSteps;
