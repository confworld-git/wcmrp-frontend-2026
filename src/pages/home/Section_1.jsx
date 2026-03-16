import React from "react";

function Section_1() {
  return (
    
    <section
      
      

      className="w-full bg-gradient-to-b from-slate-300 via-cyan-200 to-sky-300 flex flex-col items-center justify-between gap-5 px-6 py-10"
      // style={{ backgroundImage: `url(${freepik_adjust})` }}
    >
      
      <div
        data-aos="fade-up"
        className=" max-w-6xl bg-amber-50 p-5 md:p-8 rounded-xl backdrop-blur-md shadow-2xl"
      >
        <h1
          data-aos="fade-up"
          className="text-[#B22222] text-2xl font-bold text-center mb-3"
        >
          Welcome to WCMRP-2026
        </h1>
        <p
          data-aos="fade-up"
          className="text-md md:text-lg leading-relaxed text-justify"
        >
          Welcome to the{" "}
          <strong className="text-[#FF7043]">
            2<span className="align-super text-sm">nd</span> World Conference on
            Multidisciplinary Research and Practices (WCMRP-2026)
          </strong>
          , where experts, scholars and innovators from diverse fields come
          together to explore cutting-edge research and interdisciplinary
          collaboration. With the theme,
          <strong className="text-[#FF7043]">
            {" "}
            "Integrating Knowledge Across Disciplines for Global Impact:
            Innovations, Challenges and Sustainable Solutions"
          </strong>
          , this conference aims to address the world's most pressing challenges
          through a fusion of knowledge across disciplines.
        </p>
        <p data-aos="fade-up" className="mt-4 text-justify">
          Participants will engage in thought-provoking discussions, present
          groundbreaking research and discover how technology and collaboration
          can drive global solutions. Join us for an opportunity to expand your
          academic and professional horizons!
        </p>
        <p data-aos="fade-up" className="mt-4 text-justify">
          This <strong className="text-[#FF7043]">hybrid conference</strong>{" "}
          offers the flexibility to join either in person in the vibrant city of
          <strong className="text-[#FF7043]"> Kuala Lumpur, Malaysia</strong> or
          virtually from the comfort of your home or office, making it
          accessible to a global audience.
        </p>
      </div>
    </section>
  );
}

export default Section_1;
