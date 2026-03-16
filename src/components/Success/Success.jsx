import React from "react";
import "./Success.css";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { paymentStatus, amount, time } = location.state || {};
  return (
    <div className="container_success">
      <main className="main-content">
        <CircleCheckIcon className="status-icon" data-aos="fade-up" />
        <h1 className="title" data-aos="fade-up" data-aos-duration="500">
          Payment Successful
        </h1>
        <p className="description" data-aos="fade-up" data-aos-duration="600">
          Thank you for your Registration!
        </p>
        <div className="details-box" data-aos="fade-up" data-aos-duration="700">
          <div
            className="detail-item"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <span>Total Amount:</span>
            <span className="detail-value">${amount}</span>
          </div>
          <div
            className="detail-item"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <span>Payment Status:</span>
            <span className="detail-value">{paymentStatus}</span>
          </div>
          <div
            className="detail-item"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <span>Date & Time:</span>
            <span className="detail-value">{time}</span>
          </div>
        </div>
        <a
          href="/"
          className="return-button"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Return to Homepage
        </a>
      </main>
    </div>
  );
};

export default Success;

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
