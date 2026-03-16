import React from "react";
import reg from "../../assets/middlebar/register.png";
import partner from "../../assets/middlebar/partner.png";
import mail from "../../assets/middlebar/mail.png";
import call from "../../assets/middlebar/call.png";
import "./Middlebar.css";
import trans from "../../assets/middlebar/trans.png";

const Middlebar = () => {
  return (
    <>
      <ul id="middle-nav-bar">
        <div className="trans_icons">
          <img loading="lazy" src={trans} alt="" />
          <div id="google_translate_element"></div>
        </div>
        <a href="/RegistrationFee">
          <img loading="lazy" src={reg} alt="" />
          Register Now
        </a>
        <a href="mailto:info@wcmrp.com">
          <img loading="lazy" src={mail} alt="" />
          info@wcmrp.com
        </a>
        <a href="https://wa.me/918072381719" target="_blank">
          <img loading="lazy" src={call} alt="" />
          +91 8072381719
        </a>
        <a href="/Contact">
          <img loading="lazy" src={partner} alt="" />
          Apply for Academic Partner
        </a>
      </ul>
      <style>
        {`
    
#google_translate_element .goog-te-gadget {
  font-size: 0px !important;
}

#google_translate_element .goog-te-gadget span {
  display: none;
}

.goog-logo-link,
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}

#google_translate_element .goog-te-combo {
  padding: 5px;
  font-family: "poppins", sans-serif;
  outline: none;
  cursor: pointer;
  background-color: white;
  font-size: 14px;
  font-weight: 450;
  width: 150px;
  border: none;
}`}
      </style>
    </>
  );
};

export default Middlebar;
