import { useState, useEffect } from "react";
import gsap from "gsap";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const x = ev.clientX;
      const y = ev.clientY;
      gsap.to("#cursor", { duration: 0.2, x, y });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const countdown = () => {
      const newYearEnd = new Date("May 14 2026 09:30:00");
      const currentDate = new Date();
      const totalSeconds = (newYearEnd - currentDate) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds % 60);
      setTimeLeft({
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });
    };
    countdown();
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className=" w-full font-sans">
      <div
        id="cursor"
        className="w-2.5 h-2.5 rounded-full pointer-events-none bg-transparent"
      ></div>
      <div className="flex justify-center items-center">
        <div className="flex justify-around gap-5 bg-gradient-to-tl from-slate-300 via-cyan-200 to-sky-300 p-3 rounded-xl shadow-md">
          {Object.keys(timeLeft).map((key) => (
            <div
              key={key}
              className="text-center w-24 h-20 bg-blue-500 text-white rounded-lg shadow-md"
            >
              <h2 className="text-5xl font-bold">{timeLeft[key]}</h2>
              <span className="text-sm font-medium uppercase">{key}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-4 border-dashed border-blue-500 rounded-full animate-spin-slow"></div> */}
    </div>
  );
};

export default CountdownTimer;

// import React, { useEffect } from "react";

// const CountdownTimer = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cdn.logwork.com/widget/countdown.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       console.log("Check");
//     };
//   }, []);
//   return (
//     <div className="bg-white rounded-xl md:w-96 shadow-md">
//       <a
//         href="https://logwork.com/countdown-5us8"
//         className="countdown-timer"
//         data-style="columns"
//         data-timezone="Asia/Kolkata"
//         data-textcolor="#0057B7"
//         data-background="#ffffff"
//         data-digitscolor="#0057B7"
//         data-unitscolor="#0057B7"
//         data-date="2026-05-14 10:00"
//       >
//         WCMRP-2026
//       </a>
//     </div>
//   );
// };

// export default CountdownTimer;
