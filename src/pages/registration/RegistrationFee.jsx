import React, { useState, useRef, useEffect } from "react";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ConfettiCanvas from "../../components/ConfettiCanvas";
import Crack from "../../components/Crack";
import RegistrationSteps from "../../components/RegistrationSteps";
import logoImage from "../../assets/logo/logo1.webp";
import JournalSupport from "./JournalSupport.jsx";
import Addons from "./Addons.jsx";

const calculatePricing = ({ baseAmount, journalAmount = 0, addonsAmount = 0, participantCategory, hasMembership, hasCoupon }) => {
  const base = parseFloat(baseAmount);
  const journal = parseFloat(journalAmount) || 0;
  const addons = parseFloat(addonsAmount) || 0;
  const isStudent = participantCategory?.toLowerCase().includes("student");
  const membershipFeeAmount = isStudent ? 15 : 20;

  let membershipDiscount = 0, couponDiscount = 0, membershipFee = 0;

  // Discounts apply to BASE ONLY
  if (hasMembership) { membershipDiscount = parseFloat((base * 0.05).toFixed(2)); membershipFee = membershipFeeAmount; }
  if (hasCoupon)     { couponDiscount = parseFloat((base * 0.05).toFixed(2)); }

  const totalDiscount = parseFloat((membershipDiscount + couponDiscount).toFixed(2));
  const discountedBase = base - totalDiscount;

  // Add journal + addons + membership AFTER discount
  const finalAmount = parseFloat((discountedBase + journal + addons + membershipFee).toFixed(2));
  const bankTax = parseFloat((finalAmount * 0.060).toFixed(2));
  const total = parseFloat((finalAmount + bankTax).toFixed(2));

  return { baseAmount: base, membershipDiscount, couponDiscount, totalDiscount, membershipFee, finalAmount, bankTax, total };
};

const CheckoutPanel = ({
  pricing, baseSelected, participantCategory, membership, onMembershipToggle,
  couponCode, couponStatus, onCouponChange, onCouponApply, onCouponRemove,
  selectedJournal, selectedAddons, registrationBase,
}) => {
  const isStudent = participantCategory?.toLowerCase().includes("student");
  const membershipFee = isStudent ? 15 : 20;
  const journalAmount = selectedJournal?.specialPrice || 0;
  const addonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="md:w-[420px] shrink-0 space-y-4">
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-indigo-700">Premium Membership (${membershipFee} USD)</h3>
            <p className="text-sm text-indigo-600 mt-0.5">Get 5% discount on registration fee</p>
            <p className="text-sm font-bold text-indigo-700 mt-2">Fee: ${membershipFee}</p>
          </div>
          <button type="button" onClick={() => onMembershipToggle(!membership)} style={{ width: "52px" }}
            className={`relative inline-flex h-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${membership ? "bg-indigo-600" : "bg-gray-300"}`}
            aria-pressed={membership}>
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ${membership ? "translate-x-6" : "translate-x-0"}`} />
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
        <h3 className="text-[15px] font-bold text-indigo-600 mb-1">Get 5% Discount with a coupon code!</h3>
        {couponStatus === "valid" ? (
          <div className="flex items-center justify-between bg-indigo-100 border border-indigo-300 rounded-xl px-4 py-3 mt-2">
            <span className="text-indigo-700 font-semibold text-sm">✓ Coupon &quot;{couponCode}&quot; applied</span>
            <button type="button" onClick={onCouponRemove} className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors">Remove</button>
          </div>
        ) : (
          <div className="flex gap-2 mt-2">
            <input type="text" value={couponCode} onChange={(e) => onCouponChange(e.target.value.toUpperCase())} placeholder="Enter coupon code"
              className="flex-1 border border-indigo-300 bg-white rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
            <button type="button" onClick={onCouponApply} className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">Apply</button>
          </div>
        )}
        {couponStatus === "invalid" && <p className="text-red-500 text-xs mt-1">✗ Invalid or expired coupon code.</p>}
      </div>

      {baseSelected ? (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
          <h3 className="text-[15px] font-bold text-indigo-600 mb-4">Price Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Base Registration Fee:</span>
              <span className="font-medium">${(registrationBase || pricing.baseAmount).toFixed(2)}</span>
            </div>
            {journalAmount > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Journal Support ({selectedJournal?.tier}):</span>
                <span className="font-medium">+ ${journalAmount.toLocaleString()}</span>
              </div>
            )}
            {addonsAmount > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Add-ons ({selectedAddons.length} selected):</span>
                <span className="font-medium">+ ${addonsAmount}</span>
              </div>
            )}
            {(journalAmount > 0 || addonsAmount > 0) && (
              <div className="flex justify-between text-gray-800 font-semibold border-t border-dashed border-indigo-200 pt-2 mt-1">
                <span>Combined Subtotal:</span>
                <span>${((registrationBase || pricing.baseAmount) + journalAmount + addonsAmount).toLocaleString()}</span>
              </div>
            )}
            {pricing.membershipDiscount > 0 && (
              <div className="flex justify-between text-indigo-700">
                <span>Membership Discount (5%):</span>
                <span className="font-semibold">- ${pricing.membershipDiscount.toFixed(2)}</span>
              </div>
            )}
            {pricing.couponDiscount > 0 && (
              <div className="flex justify-between text-indigo-700">
                <span>Coupon Discount (5%):</span>
                <span className="font-semibold">- ${pricing.couponDiscount.toFixed(2)}</span>
              </div>
            )}
            {pricing.membershipFee > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Membership Fee:</span>
                <span className="font-medium">+ ${pricing.membershipFee.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-indigo-200 my-2" />
            <div className="flex justify-between font-bold text-gray-800">
              <span>Subtotal:</span><span>${pricing.finalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Bank Convenience Charge (6%):</span><span>${pricing.bankTax.toFixed(2)}</span>
            </div>
            <div className="border-t border-indigo-200 my-2" />
            <div className="flex justify-between text-indigo-700 font-bold text-base">
              <span>Total Amount:</span><span>${pricing.total.toFixed(2)}</span>
            </div>
            {pricing.totalDiscount > 0 && (
              <div className="mt-3 bg-indigo-100 border border-indigo-200 rounded-xl px-4 py-2.5 text-center">
                <span className="text-indigo-700 font-semibold text-sm">🎉 You saved ${pricing.totalDiscount.toFixed(2)}!</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50 p-5 text-center text-sm text-indigo-700">
          ↑ Select a registration fee from the table above to see your price breakdown.
        </div>
      )}
    </div>
  );
};

const RegistrationFee = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const Early_Bird_Last_Date = new Date("10 March 2026");
  Early_Bird_Last_Date.setHours(23, 59, 59, 999);
  const Final_Last_Date = new Date("20 March 2026");
  Final_Last_Date.setHours(23, 59, 59, 999);
  const dateNow = new Date();
  const isEarlyBird = dateNow <= Early_Bird_Last_Date;
  const isFinal = dateNow <= Final_Last_Date;

  const navigate = useNavigate();
  const RegistrationFeeRef = useRef();

  const [selectedBase, setSelectedBase] = useState(null);
  const [participantCategory, setParticipantCategory] = useState("");
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [membership, setMembership] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponStatus, setCouponStatus] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState("");

  useEffect(() => { setSelectedJournal(null); setSelectedAddons([]); }, [selectedBase]);

  const journalAmount = selectedJournal?.specialPrice || 0;
  const addonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  const pricing = selectedBase
  ? calculatePricing({
      baseAmount: selectedBase.value,   // base fee ONLY
      journalAmount,                    // added after discount inside calculator
      addonsAmount,                     // added after discount inside calculator
      participantCategory,
      hasMembership: membership,
      hasCoupon: couponDiscount > 0,
    })
  : { baseAmount: 0, membershipDiscount: 0, couponDiscount: 0, totalDiscount: 0, membershipFee: 0, finalAmount: 0, bankTax: 0, total: 0 };

  const handleBaseSelect = (value, title, category) => setSelectedBase({ value, title, category });

  const handleCouponApply = async () => {
    if (!couponCode.trim()) return;
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/coupon/validate`, { code: couponCode });
      setCouponStatus("valid"); setCouponDiscount(data.discountPercent); setAppliedCouponCode(couponCode);
      toaster.success(data.message);
    } catch (error) {
      setCouponStatus("invalid"); setCouponDiscount(0); setAppliedCouponCode("");
      toaster.danger(error.response?.data?.message || "Invalid coupon");
    }
  };

  const handleCouponRemove = () => { setCouponCode(""); setCouponStatus(null); setCouponDiscount(0); setAppliedCouponCode(""); };

  const HandleRegistration = async (e) => {
    e.preventDefault();
    if (!selectedBase) { toaster.warning("Please select a registration fee from the table."); return; }
    const formData = new FormData(RegistrationFeeRef.current);
    const RegistrationData = Object.fromEntries(formData.entries());
    if (!RegistrationData.Terms_and_Conditions) { toaster.warning("Please accept the Terms and Conditions."); return; }
    if (!RegistrationData.presentation_Category) { toaster.warning("Please select a Presentation Category."); return; }
    if (!RegistrationData.presentation_Type) { toaster.warning("Please select a Presentation Type."); return; }
    if (!RegistrationData.participant_category) { toaster.warning("Please select a Participant Category."); return; }
    if (!RegistrationData.Title) { toaster.warning("Please select a Title."); return; }

    const discountApplied = membership && couponDiscount > 0 ? 10 : membership || couponDiscount > 0 ? 5 : 0;

    const selectedFeePayload = {
      title: selectedBase.title, category: selectedBase.category,
      value: pricing.baseAmount, convenience_price: pricing.bankTax,
      total: pricing.finalAmount, discountApplied,
      membershipFee: pricing.membershipFee, membershipSelected: membership,
      couponCode: couponDiscount > 0 ? appliedCouponCode : null,
      finalTotal: pricing.total,
      registrationBase: selectedBase.value,
      journalSupport: selectedJournal ? { tier: selectedJournal.tier, package: selectedJournal.package, amount: selectedJournal.specialPrice } : null,
      journalAmount,
      addons: selectedAddons.map((a) => ({ label: a.label, sublabel: a.sublabel, amount: a.price })),
      addonsAmount,
    };

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/registration`, { ...RegistrationData, selectedFee: selectedFeePayload });
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, amount: data.amount, currency: "USD",
        name: "Confworld Educational Research and Development Association (CERADA)",
        description: "WCMRP-2026 Conference Registration", image: logoImage, order_id: data.order_id,
        handler: async (response) => {
          try {
            await axios.post(`${import.meta.env.VITE_API_URL}/payment/validate`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature, Order_ID: data.order_id,
            });
            navigate("/Payment_Details_Success", { state: { paymentStatus: "Success", amount: pricing.total, time: new Date().toLocaleString() } });
            RegistrationFeeRef.current.reset(); setSelectedBase(null);
          } catch { toaster.danger("Payment verification failed. Please contact support."); }
        },
        prefill: { name: RegistrationData.first_name, email: RegistrationData.email, contact: RegistrationData.number },
        theme: { color: "#4f46e5" },
        modal: { ondismiss: async () => { try { await axios.post(`${import.meta.env.VITE_API_URL}/payment/cancel`, { order_id: data.order_id }); } catch {} toaster.warning("Payment window closed."); } },
      };
      if (!window.Razorpay) { toaster.danger("Payment gateway not available. Please refresh the page."); return; }
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => { toaster.danger(`Payment failed: ${response.error.description}`); });
      rzp.open();
    } catch (error) { toaster.danger(error.response?.data?.message || "Payment processing failed."); console.error(error); }
  };

  const participationFees1 = [{ title: "Physical (Onsite) Participants", categories: [
    { category: "Academicians / Delegates / Research Scholars / PhD Candidates", earlyBird: 380, final: 420, onsite: 500 },
    { category: "UG/PG Students", earlyBird: 360, final: 400, onsite: 450 },
    { category: "Non-Presenter/Attendee/Listener", earlyBird: 230, final: 250, onsite: 350 },
  ]}];

  const participationFees2 = [{ title: "Virtual (Online) Participants", categories: [
    { category: "Academicians / Delegates / Research Scholars / PhD Candidates", earlyBird: 150, final: 200 },
    { category: "UG/PG Students", earlyBird: 100, final: 150 },
    { category: "Non-Presenter/Attendee/Listener", earlyBird: 90, final: 100 },
  ]}];



  const discountAndPaperPresentation = [
    { title: "Group Discount", details: ["You qualify for a discounted registration fee if you are a group of 5 members or more individuals or if you are a co-author of a paper presentation.", "If your group consists of more than 10 members, please reach out to our Academic Partnership Team to discuss a higher discount percentage on the registration fee."] },
    { title: "If you are presenting more than one paper", details: ["An author may submit and present a maximum of three papers at the conference.", "If you are presenting more than one paper at the conference, full payment is required for the first paper.", "If other papers are oral or poster presentations, an additional fee of 150 USD will be charged for each paper.", "If any of the papers requires Scopus publication, then you have to pay the publication fee for each paper.", "If you have more than 3 papers, the additional paper can be presented by a co-author on full registration.", "Confirmation on the number of papers should be given to the Conference Coordinator 3 weeks prior to the final payment deadline."] },
  ];

  return (
    <section>
      <div className="bg-indigo-800 p-5 h-60 md:h-46">
        <ConfettiCanvas>
          <div className="text-center flex flex-col justify-center items-center space-y-6">
            <h2 className="text-center text-2xl md:text-3xl text-white font-bold md:w-6xl">
              Claim a <span className="text-yellow-400">5% discount</span> on registration with CERADA's exclusive Premium Membership
            </h2>
            <div className="flex flex-row justify-between items-center space-x-6">
              <a className="py-2 px-4 bg-amber-50 hover:bg-amber-100 rounded font-semibold" target="_blank" href="https://confworld.org/Student-Membership" rel="noreferrer">Student</a>
              <a className="py-2 px-4 bg-amber-50 hover:bg-amber-100 rounded font-semibold" target="_blank" href="https://confworld.org/Professional-Membership" rel="noreferrer">Professional</a>
            </div>
          </div>
        </ConfettiCanvas>
      </div>

      <div className="flex flex-col justify-center items-center text-center my-5 space-y-4">
        <h2 className="text-3xl text-teal-500 font-bold">Registration</h2>
        <p className="w-11/12 font-medium">Welcome to the WCMRP-2026 registration page. Secure your spot at this premier conference to connect with global experts, present your research and advance your career. Follow the steps below to complete your registration.</p>
      </div>

      <div className="bg-indigo-50 flex flex-col justify-center items-center p-5 gap-5 md:gap-10">
        {discountAndPaperPresentation.map((item, index) => (
          <div key={index} className="bg-cyan-700 text-white rounded-xl p-5 md:px-15 md:py-10 md:w-9/12 space-y-4 overflow-hidden">
            <Crack />
            <h2 className="text-2xl md:text-3xl font-medium text-center mb-5">{item.title}</h2>
            <ul className="font-medium leading-6 space-y-4">{item.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
          </div>
        ))}
      </div>

      <RegistrationSteps />

      {/* STEP 1: Fee Tables */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-violet-600 text-center">Registration Fees</h3>
        <p className="text-red-600 font-medium mt-3 mb-8">*Note: Additional charges applicable for Scopus publication (T&C Apply)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-5 w-full">
          {participationFees1.map((fee, index) => (
            <table key={index} className="table-auto w-full border-collapse rounded-b-md shadow-xl">
              <caption className="bg-sky-500 text-white p-2 rounded-t-md font-bold text-md">{fee.title}</caption>
              <thead><tr className="bg-emerald-500 text-md text-white text-left">
                <th className="border-r border-gray-200 p-4">Categories</th>
                <th className="border-r border-gray-200 p-4">Early Bird (USD)</th>
                <th className="p-4 border-r border-gray-200">Final (USD)</th>
                <th className="p-4">On Spot (USD)</th>
              </tr></thead>
              <tbody>{fee.categories.map((item, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}>
                  <td className="border-r border-gray-200 p-4">{item.category}{["Students","Students with Scopus Publication"].includes(item.category) && <span className="text-red-600">*</span>}</td>
                  <td className="border-r border-gray-200 p-4"><label className="line-through"><input disabled type="radio" name="price" onChange={() => handleBaseSelect(item.earlyBird, fee.title, item.category)} value={item.earlyBird} className="mr-2" />{item.earlyBird}</label></td>
                  <td className="p-4 border-r border-gray-200"><label ><input type="radio" name="price" onChange={() => handleBaseSelect(item.final, fee.title, item.category)} value={item.final} className="mr-2" />{item.final}</label></td>
                  <td className="p-4"><label><input type="radio" name="price" onChange={() => handleBaseSelect(item.onsite, fee.title, item.category)} value={item.onsite} className="mr-2" />{item.onsite}</label></td>
                </tr>
              ))}</tbody>
            </table>
          ))}
          {participationFees2.map((fee, index) => (
            <table key={index} className="table-auto w-full border-collapse rounded-b-md shadow-xl">
              <caption className="bg-sky-500 text-white p-2 rounded-t-md font-bold text-md">{fee.title}</caption>
              <thead><tr className="bg-emerald-500 text-md text-white text-left">
                <th className="border-r border-gray-200 p-4">Categories</th>
                <th className="border-r border-gray-200 p-4">Early Bird (USD)</th>
                <th className="p-4">Final (USD)</th>
              </tr></thead>
              <tbody>{fee.categories.map((item, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}>
                  <td className="border-r border-gray-200 p-4">{item.category}{["Students","Students with Scopus Publication"].includes(item.category) && <span className="text-red-600">*</span>}</td>
                  <td className="border-r border-gray-200 p-4"><label className="line-through"><input disabled type="radio" name="price" onChange={() => handleBaseSelect(item.earlyBird, fee.title, item.category)} value={item.earlyBird} className="mr-2" />{item.earlyBird}</label></td>
                  <td className="p-4"><label ><input  type="radio" name="price" onChange={() => handleBaseSelect(item.final, fee.title, item.category)} value={item.final} className="mr-2" />{item.final}</label></td>
                </tr>
              ))}</tbody>
            </table>
          ))}
        </div>

        <div className="w-full px-4 text-left">
          <p className="text-red-600 text-sm font-medium">*Indicates - UG students only (You have to submit a soft copy of your university/college identity card as a proof)</p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-5 w-full">
          {PresentationFees.map((fee, index) => (
            <table key={index} className="table-fixed min-w-full w-full border-collapse rounded-b-md shadow-xl">
              <caption className="bg-sky-500 text-white p-2 rounded-t-lg font-bold text-md">{fee.title}</caption>
              <tbody>{fee.categories.map((item, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}>
                  <td className="w-[75%] border-r border-gray-200 p-4">{item.category}</td>
                  <td className="w-[25%] p-4"><label className={!isFinal ? "line-through text-gray-400" : ""}><input disabled={!isFinal} type="radio" name="price" onChange={() => handleBaseSelect(item.final, fee.title, item.category)} value={item.final} className="mr-2" />${item.final}</label></td>
                </tr>
              ))}</tbody>
            </table>
          ))}
        </div> */}
      </div>

      {/* STEP 2: Journal Publication Support */}
       <JournalSupport selectedJournal={selectedJournal} setSelectedJournal={setSelectedJournal} />

      {/* STEP 3: Add-ons */}
      <Addons selectedAddons={selectedAddons} setSelectedAddons={setSelectedAddons} />

      {/* STEP 4: Registration Form */}
      <div className="flex flex-col justify-center items-center mt-4 p-5 md:py-10">
        <h1 className="text-2xl md:text-3xl text-indigo-500 font-bold">Registration Form</h1>
        <p className="text-md font-medium mt-2">"2<span className="text-sm align-super">nd</span> World Conference on Multidisciplinary Research and Practices (WCMRP-2026)"</p>

        <form ref={RegistrationFeeRef} onSubmit={HandleRegistration}
          className="text-sm p-2 md:p-6 flex flex-col md:flex-row justify-between md:gap-10 items-start shadow-md rounded-lg mt-8 md:w-11/12">
          <section className="w-full space-y-4 md:columns-2 gap-5">
            <div><select className="w-full p-2.5 border border-gray-300 outline-none rounded-md" name="Title" defaultValue=""><option value="" disabled>Select Title</option><option>Mr</option><option>Ms</option><option>Mrs</option><option>Dr</option><option>Prof</option></select></div>
            <div><input type="text" name="first_name" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="First Name" required /></div>
            <div><input type="text" name="last_name" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Last Name" required /></div>
            <div><input type="text" name="certificate_name" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Certificate Name" required /></div>
            <div><label htmlFor="dateofbirth">Date of Birth:</label><input id="dateofbirth" type="date" name="DOB" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" max="2020-01-01" required /></div>
            <div><input type="text" name="nationality" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Nationality" required /></div>
            <div><input type="text" name="department" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Department" required /></div>
            <div><input type="text" name="institution" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Institution" required /></div>
            <div><input type="tel" name="number" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Mobile Number with Country Code" required /></div>
            <div><input type="email" name="email" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="E-mail" required /></div>
            <div>
              <select className="w-full p-2.5 border border-gray-300 outline-none rounded-md" name="participant_category" value={participantCategory} onChange={(e) => setParticipantCategory(e.target.value)} required>
                <option value="" disabled>Select Participant Category</option>
                <option>Academicians</option><option>Delegates</option><option>Research scholars</option><option>Student</option>
              </select>
            </div>
            <div className="space-y-2"><span className="block font-medium">Presentation Category:</span>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2"><input type="radio" name="presentation_Category" value="oral" className="form-radio" /><span>Oral</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="presentation_Category" value="poster" className="form-radio" /><span>Poster</span></label>
              </div>
            </div>
            <div className="space-y-2"><span className="block font-medium">Presentation Type:</span>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2"><input type="radio" name="presentation_Type" value="Virtual" className="form-radio" /><span>Virtual</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="presentation_Type" value="Physical" className="form-radio" /><span>Physical</span></label>
              </div>
            </div>
          </section>

          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <CheckoutPanel
              pricing={pricing} baseSelected={!!selectedBase} participantCategory={participantCategory}
              membership={membership} onMembershipToggle={setMembership}
              couponCode={couponCode} couponStatus={couponStatus}
              onCouponChange={setCouponCode} onCouponApply={handleCouponApply} onCouponRemove={handleCouponRemove}
              selectedJournal={selectedJournal} selectedAddons={selectedAddons} registrationBase={selectedBase?.value}
            />
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="Terms_and_Conditions" id="terms" className="w-4 h-4" value="on" />
                <label htmlFor="terms" className="font-medium cursor-pointer text-sm">I agree to the <span className="text-indigo-600 underline">Terms and Conditions</span></label>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold text-base rounded-2xl hover:from-teal-500 hover:to-teal-600 transition-all shadow-md hover:shadow-lg">
                Check Out (Open Payment Gateway)
              </button>
              <p className="text-center text-gray-500 text-xs">*Please note that the payee is responsible for all bank charges</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationFee;