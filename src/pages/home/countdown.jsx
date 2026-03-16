import React, { useEffect, useState } from "react";

const CountdownNew = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center md:justify-start gap-3 text-center">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="bg-gradient-to-br from-red-600 to-orange-500 text-white px-3 py-2 rounded-md min-w-[60px]">
          <div className="text-lg md:text-xl font-bold">{timeLeft[interval]}</div>
          <div className="text-[10px] uppercase">{interval}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownNew;
