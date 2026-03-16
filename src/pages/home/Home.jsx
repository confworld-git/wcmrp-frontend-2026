import React from "react";
import Landing from "./Landing";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Key_Highlights from "./Key_Highlights";
import Session_Tracks from "./Session_Tracks";
import Submission_Deadlines from "../../components/Submission_Deadlines";
import Logo_marquee from "./Logo-marquee";
import KeynoteSpeakers from "./KeynoteSpeakers";
import WhyJoinUs from "./WhyJoinUs";
import Proceedings from "../../components/Proceedings";
import RegistrationSteps from "../../components/RegistrationSteps";
import Journals from "../../components/Journals";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Landing />
      <Logo_marquee />
      <Section_1 />
      <Section_2 />
      <Key_Highlights />
      <Session_Tracks />
      <div className="flex justify-center w-full px-5 md:px-10 py-10 md:py-15 bg-gradient-to-b from-white via-cyan-200 to-sky-300">
        <Submission_Deadlines />
      </div>
      {/* <KeynoteSpeakers /> */}
      <RegistrationSteps />
      <WhyJoinUs />
      <Proceedings />
      <Journals />
    </div>
  );
}

export default Home;
