import React from "react";

import venue1 from "../../assets/venue/venue1.webp";
import venue2 from "../../assets/venue/venue2.webp";
import venue3 from "../../assets/venue/venue3.webp";
import venue4 from "../../assets/venue/venue4.jpeg";
import venue5 from "../../assets/venue/venue5.webp";
import venue6 from "../../assets/venue/venue6.webp";
import venue7 from "../../assets/venue/venue7.webp";
import venue8 from "../../assets/venue/venue8.webp";
import venue9 from "../../assets/venue/venue9.webp";
import venue10 from "../../assets/venue/venue10.webp";
import venue11 from "../../assets/venue/venue11.webp";
import venue12 from "../../assets/venue/venue12.webp";
import venue13 from "../../assets/venue/venue13.webp";
import venue14 from "../../assets/venue/venue14.webp";

const Venue = () => {
  const malaysiaImages = [
    venue1,
    venue2,
    venue3,
    venue4,
    venue5,
    venue6,
    venue7,
    venue8,
    venue9,
    venue10,
    venue11,
    venue12,
    venue13,
    venue14,
  ];

  return (
    <section>
      <div
        data-aos="fade-up"
        className="p-5 flex flex-col items-center justify-center"
      >
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl text-blue-700 font-bold"
        >
          Venue
        </h2>
        <p data-aos="fade-up" className="text-lg font-medium">
          Kuala Lumpur, Malaysia
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          {malaysiaImages.map((image, index) => (
            <div
              className="shadow-md rounded-lg hover:scale-106 hover:shadow-lg transition-all duration-300 ease-in-out"
              key={index}
            >
              <img
                src={image}
                alt={`Malaysia ${index}`}
                className="object-center object-cover w-full md:h-64 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venue;
