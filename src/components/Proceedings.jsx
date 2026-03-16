import React from "react";
import pro1 from "../assets/proceedings/PRO1.png";
import pro2 from "../assets/proceedings/PRO2.png";

const Proceedings = () => {
  return (
    <div
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
      className="flex flex-col justify-center items-center max-w-3xl rounded-2xl space-y-4 md:space-y-6 bg-gradient-to-r from-sky-400 to-cyan-300 p-6 my-5"
    >
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-xl font-bold text-white text-center"
      >
        Proceedings & Publications
      </h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-wrap justify-center gap-5"
      >
        <img
          loading="lazy"
          className="w-auto max-h-18 rounded-md"
          src={pro1}
          alt=""
        />
        
        <img
          loading="lazy"
          className="w-auto max-h-18 rounded-md"
          src={pro2}
          alt=""
        />
      </div>
      <p
        data-aos="fade-up"
        className="text-md font-medium text-white text-center"
      >
        Note: WCMRP-2026 Proceedings will be submitted to the Web of science
        Book citation index (BkCI) and Scopus for evaluation and indexing
        purposes (T&C)* apply.
      </p>
    </div>
  );
};

export default Proceedings;
