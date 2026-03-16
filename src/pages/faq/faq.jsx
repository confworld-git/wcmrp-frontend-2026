import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import image from "../../assets/5672795.webp";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is WCMRP-2026?",
      answer:
        "The 2ⁿᵈ World Conference on Multidisciplinary Research and Practices (WCMRP-2026) is a premier event designed to bring together researchers, professionals, students and scholars from diverse fields.",
    },
    {
      question: "Who can attend the conference?",
      answer:
        "The conference is open to faculty members, academic scholars, students, industry professionals and anyone interested in the fields of science, technology, engineering, education and social sciences.",
    },
    {
      question: "How do I register for the conference?",
      answer:
        "You can register for WCMRP-2026 through our online registration portal. Choose your category, fill out the registration form, select your sessions and complete the payment process.",
    },
    {
      question: "What are the registration fees?",
      answer:
        "The registration fees vary based on the category and registration period. Detailed fee information is available on the Registration Page.",
    },
    {
      question: "Can I submit my paper for presentation?",
      answer:
        "Yes, you can submit your abstract or full paper through our submission portal. All submissions will be reviewed and accepted papers will be presented at the conference.",
    },
    {
      question: "Will my paper be published?",
      answer:
        "High-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
    },
    {
      question: "What is the review process for submitted papers?",
      answer:
        "All submitted papers will undergo a rigorous peer-review process conducted by experts in the respective fields. Reviewers will assess the originality, significance and technical quality of the papers. Authors will be notified of the review results and any required revisions.",
    },
    {
      question: "What is included in the registration fee?",
      answer:
        "The registration fee includes access to all sessions and workshops, conference materials, refreshments and lunch during conference days, a certificate of participation and networking opportunities.",
    },
    {
      question: "Is there a cancellation policy?",
      answer:
        "Yes, cancellations made 50 Days Before Conference: 40% refundable. 30-40 Days Before Conference: 35% refundable. Less Than 30 Days Before Conference: No refunds will be issued.",
    },
    {
      question: "How do I contact the conference organizers?",
      answer:
        "For general inquiries, please email info@confworld.org. For registration-related queries, email info@wcmrp.com. For sponsorship opportunities, reach out to collaboration@confworld.org.",
    },
    {
      question: "Will my presented paper be published?",
      answer:
        "Yes, high-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
    },
    {
      question: "How do I submit my paper for publication?",
      answer:
        "After presenting at the conference, you will receive detailed instructions on how to submit your paper for publication consideration in the indexed journals.",
    },
    {
      question: "What is the review process for publication?",
      answer:
        "All submitted papers undergo a rigorous peer-review process by experts in the relevant field to ensure the quality and relevance of the research.",
    },
    {
      question: "Are there any additional fees for publication?",
      answer:
        "There may be additional fees for publication in certain journals. Detailed information will be provided after your paper is accepted for presentation at the conference.",
    },
    {
      question: "When will I know if my paper is accepted for publication?",
      answer:
        "You will be notified about the acceptance of your paper for publication after the review process is complete, typically within 5 months post-conference.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="FAQ_IMAGE"
        className="w-auto md:h-76 top-0  mb-5 object-center object-cover"
      />
      <div data-aos="fade-up" className="md:w-3xl space-y-4 p-3 md:p-0 mb-10">
        {faqData.map((item, index) => (
          <div
            data-aos="fade-left"
            key={index}
            className="rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className={`${
                openIndex === index ? "bg-indigo-300 hover:bg-indigo-300 " : ""
              } w-full flex justify-between items-center p-3 md:p-4 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-md font-medium text-violet-800">
                {item.question}
              </span>
              <ChevronDown
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <div
                className={`${
                  openIndex === index
                    ? "bg-indigo-200 hover:bg-indigo-200 "
                    : ""
                } p-3 md:p-4 bg-gray-50 text-gray-800 `}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
