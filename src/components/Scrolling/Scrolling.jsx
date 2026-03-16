import React from "react";
import "./Scrolling.css"; // Import the CSS file

function Scrolling() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#FF7043] text-white p-1 m-0">
      <div className="inline-block animate-scroll font-semibold">
        HYBRID EVENT - You can participate in person at{" "}
        <strong>Kuala Lumpur, Malaysia</strong> or <strong>Virtually</strong> from
        your home or office.
      </div>
    </div>
  );
}

export default Scrolling;
