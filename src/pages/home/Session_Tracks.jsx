import React from "react";
import { Link } from "react-router-dom";
import Engineering from "../../assets/home_image/Session_Tracks/Thumbnail_1.png";
import Physical from "../../assets/home_image/Session_Tracks/Thumbnail_2.png";
import Business from "../../assets/home_image/Session_Tracks/Thumbnail_3.png";
import Technologies from "../../assets/home_image/Session_Tracks/Thumbnail_4.png";
import Social from "../../assets/home_image/Session_Tracks/Thumbnail_5.png";
import Governance from "../../assets/home_image/Session_Tracks/Thumbnail_6.jpg";

function Session() {
  const tracks = [
    { title: "Engineering and Technical Advancements", image: Engineering, id: "session1" },
    { title: "Physical and Life Science", image: Physical, id: "session2" },
    { title: "Business & Management Studies", image: Business, id: "session3" },
    { title: "Emerging Technologies & Education", image: Technologies, id: "session4" },
    { title: "Social Science and Humanities", image: Social, id: "session5" },
    { title: "Governance and Policy Innovation", image: Governance, id: "session6" },
  ];

  return (
    <section className="p-5 bg-gradient-to-t w-full from-white via-cyan-200 to-sky-300">
      <div className="text-center">
        <h1 data-aos="fade-up" className="mb-10 text-blue-500 text-3xl font-bold">
          Session <span className="">Tracks</span>/Call for{" "}
          <span className="">Papers</span>
        </h1>
      </div>

      <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-5">
        {tracks.map((track, index) => (
          <a href={'/SessionTracks'} key={index} data-aos="zoom-in" className="w-auto">
            <img
              className="rounded-xl max-h-60 w-full object-center object-cover transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
              src={track.image}
              alt={track.title}
              title={track.title}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Session;
