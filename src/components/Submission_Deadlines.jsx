import React from "react";
import image from "../assets/home_image/modern-tech-background-with-low-poly-plexus.webp";

function Submission_Deadlines() {
  const deadlines = [

    {
      event: "Early Bird Registration",
      date: "28 February 2026",
      super: "th",
    },
    { event: "Abstract Submission", date: "20 May 2026", super: "th" },
    { event: "Full Paper Submission", date: "25 May 2026", super: "th" },
    { event: "Final Registration", date: "21 May 2026", super: "st" },
  ];

  return (
    <section className="">
      <div
        data-aos="fade-up"
        className="min-h-68 rounded-xl shadow-md md:px-25 p-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2
          data-aos="fade-up"
          className="mb-5 text-3xl font-bold text-center text-white"
        >
          Submission Deadlines
        </h2>
        <div
          data-aos="fade-up"
          className="flex justify-center items-center gap-10 flex-wrap"
        >
          {deadlines.map((deadline, index) => {
            const date = new Date(deadline.date);
            return (
              <div
                data-aos="flip-down"
                key={index}
                className="min-w-32 bg-white min-h-44 p-3 mb-4 font-medium rounded-lg shadow-lg"
              >
                <div className="w-44 h-40 flex-none rounded-t text-center shadow-lg">
                  <div className="block rounded-t overflow-hidden text-center ">
                    <div className="bg-blue-500 text-white py-1">
                      {date.toLocaleString("default", { month: "long" })}{" "}
                      {date.getFullYear()}
                    </div>
                    <div className="pt-1 border-l border-r border-white bg-white">
                      <span className="text-5xl text-orange-500 font-bold leading-tight">
                        {date.getDate()}
                        <span className="text-lg font-medium align-super">
                          {deadline.super}
                        </span>
                      </span>
                    </div>
                    <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                      <span className="text-sm">
                        <br></br>
                      </span>
                    </div>
                    <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white mb-1">
                      <span className="text-md font-bold text-indigo-600">
                        {deadline.event}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white  p-6 max-w-md w-full mx-auto mt-2">
        {/* Title */}
        {/* <h2 className="text-xl font-semibold mb-2">{title}</h2> */}

        {/* Description */}
        {/* <p className="text-gray-600 mb-6">{description}</p> */}

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="/Submission"
            className="flex-1 text-center !text-white py-2 rounded-lg bg-blue-700 hover:opacity-90 transition"
          >
            Submit Paper
          </a>

          <a
            href="/RegistrationFee"
            className="flex-1 text-center !text-white py-2 rounded-lg bg-orange-400 hover:opacity-90 transition"
          >
            Register Now
          </a>
        </div>
        
      </div>
        <p data-aos="fade-up" className="text-center text-white mt-5">
          For detailed submission guidelines, please visit the{" "}
          <a
            className="font-bold text-red-500 hover:text-red-600 "
            href="/Submission"
          >
            Submission Page
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Submission_Deadlines;
