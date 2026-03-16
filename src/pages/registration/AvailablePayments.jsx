import React from "react";
import mobilepay from "../../assets/available_payment/2981938.jpg";
import online_transactions from "../../assets/available_payment/6617.jpg";
import Paypal from "../../assets/available_payment/Paypal_2014_logo.png";
import BankTransfer from "../../assets/available_payment/mobile-banking-vector-illustration-concept_199064-312.avif";
import Bank from "../../assets/available_payment/4455.webp";

const AvailablePayments = () => {
  const AvailablePaymentmethods = [
    {
      title: "Online payment using Debit/Credit card",
      image: mobilepay,
    },
    {
      title: "Net Banking",
      image: online_transactions,
    },
    {
      title: "Paypal",
      image: Paypal,
    },
    {
      title: "Bank transfer (TT)",
      image: BankTransfer,
    },
  ];

  const BankDetails = [
    {
      title: "Beneficiary Name",
      value: "CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION",
    },
    {
      title: "Bank Name",
      value: "HDFC Bank",
    },
    {
      title: "Account Number",
      value: "50200097123575",
    },
    {
      title: "IFSC Code",
      value: "HDFC0000124",
    },
    {
      title: "Swift Code",
      value: "HDFCINBBCHE",
    },
    {
      title: "Branch",
      value: "Kilpauk, Chennai, Tamil Nadu, India",
    },
  ];

  return (
    <section>
      <div className="p-5 space-y-5">
        <h2 className="text-2xl text-purple-700 font-semibold">
          Available Payment methods
        </h2>
        <div className=" flex flex-col md:flex-row justify-between p-5 bg-green-50 rounded-xl">
          {AvailablePaymentmethods.map((item, index) => (
            <div
              data-aos="zoom-out"
              key={index}
              className="flex flex-col justify-center gap-5 items-center mb-4"
            >
              <img
                className="object-center h-56"
                src={item.image}
                alt={item.title}
              />
              <h3 className="text-lg text-teal-800 font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 space-y-5">
        <h2
          data-aos="zoom-out"
          className="text-2xl text-purple-700 font-semibold"
        >
          Bank Details (For Bank Transfer)
        </h2>
        <div className="flex flex-col md:flex-row justify-between p-5 gap-10 bg-green-50 rounded-xl shadow-xl">
          <div data-aos="fade-right" className="md:w-6/12 rounded-xl shadow-xl">
            <img
              className="object-center object-cover rounded-xl"
              src={Bank}
              alt="Bank_image"
            />
          </div>

          <div
            data-aos="fade-left"
            className=" flex flex-col justify-between p-5 md:p-10 bg-white rounded-xl shadow-xl"
          >
            {BankDetails.map((item, index) => (
              <p className="text-md font-semibold" key={index}>
                {item.title}:{" "}
                <span className="font-medium text-blue-600">{item.value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailablePayments;
