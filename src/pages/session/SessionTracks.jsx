import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CgPentagonRight } from "react-icons/cg";
import SubmissionDeadline from "../../components/Submission_Deadlines.jsx";



const SessionTracks = () => {
  const location = useLocation();
  const [activeSession, setActiveSession] = useState(null);

  const conferenceSessions = [
    {
      title: "Engineering and Technical Advancements",
      session: "Session 1: Engineering and Technical Advancements",
      image: {
        file: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
        className: "rounded-2xl w-full md:h-96 object-center object-cover",
      },
      topics: ["Advanced Materials and Nanotechnology", "Architecture", "Artificial Intelligence and Machine Learning", "Bioengineering", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Cloud Computing", "Cybersecurity in Engineering and Critical Infrastructure", "Data Analytics", "Digital Image Processing", "Digital Transformation and Industry 4.0", "Emerging Technologies in Aerospace and Automotive Engineering", "Electronic Computer-Aided Design (ECAD)", "Geographic Information Systems (GIS)", "Industrial Engineering", "IoT, Big Data and Automation in Modern Manufacturing", "Mathematical Modeling", "Mechanical Engineering", "Power & Energy Engineering", "Renewable Energy and Waste Management", "Robotics and Automation", "Satellite Communication Systems", "Smart Cities and Urban Development", "Soft Computing", "Sustainable Engineering and Green Technologies", "Telecommunications and 5G Technology", "Virtual Reality", "Water Resources and Environmental Engineering", "Wireless/Mobile Communication"]
    },
    {
      title: "Physical and Life Science",
      session: "Session 2: Physical and Life Science",
      image: {
        file: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
        className: "rounded-2xl w-full max-w-3xl md:h-96 object-center object-cover",
      },
      topics: ["Archaeology", "Astronomy and Astrophysics", "Biochemistry and Biotechnology", "Biomedical Science and Public Health", "Cancer Research and Immunology", "Cellular and Molecular Neuroscience", "Chemistry", "Computational Biology and Bioinformatics", "Ecology and Environmental Science", "Forestry", "Geology and Earth Sciences", "Marine and Aquatic Sciences", "Mathematics and Theoretical Physics", "Microbiology and Virology", "Molecular Biology and Genetics", "Nanoscience and Nanotechnology in Life Sciences", "Physics of Materials and Condensed Matter", "Plant and Agricultural Sciences", "Quantum Biology", "Synthetic Biology and Genetic Engineering"]
    },
    {
      title: "Business & Management Studies",
      session: "Session 3: Business & Management Studies",
      image: {
        file: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        className: "rounded-2xl w-full md:h-96 object-center object-cover",
      },
      topics: ["Accounting and Financial Reporting", "Business Analytics and Data Science", "Business Ethics and Corporate Governance", "Corporate Social Responsibility (CSR) and Sustainability", "Digital Marketing", "Digital Transformation and E-Business", "Emerging Markets and Economic Development", "Entrepreneurship and Startups", "Financial Management and Investment Strategies", "Global Business and International Trade", "Human Resource Management and Organizational Behavior", "Innovation in Education and Knowledge Management", "Innovation Management and Product Development", "IT Governance & E-Business", "Marketing and Consumer Behavior", "Project Management and Agile Methodologies", "Strategic Management and Leadership", "Supply Chain and Operations Management", "Tourism and Hospitality Management"]
    },
    {
      title: "Emerging Technologies & Education",
      session: "Session 4: Emerging Technologies & Education",
      image: {
        file: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop",
        className: "rounded-2xl w-full md:h-96 object-center object-cover",
      },
      topics: ["Artificial Intelligence and Machine Learning in Education", "Augmented Reality (AR) and Virtual Reality (VR) in the Classroom", "Data Analytics and Learning Analytics", "Digital Literacy and 21st Century Skills Development", "Digital Transformation in Education", "EdTech Startups and Innovation in Education", "Educational Robotics and STEM Education Innovations", "Educational Technology", "E-learning", "Emerging Tech in Vocational and Technical Training", "Gamification and Game-Based Learning", "Health & Sports Education", "Hybrid Learning Models and Flexible Education", "Imaginative Education", "Innovations in Education Raising Scientific Literacy", "Innovative Teaching Methods", "Internet of Things (IoT) and Smart Learning Environments", "Language Education", "Music Education", "Quality and Standards in Educational Curriculum & Pedagogy", "Social Media and Collaborative Learning", "Special Education, Learning Difficulties and Learner Diversity"]
    },
    {
      title: "Social Sciences and Humanities",
      session: "Session 5: Social Sciences and Humanities",
      image: {
        file: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        className: "rounded-2xl w-full md:h-96 object-center object-cover",
      },
      topics: ["Anthropology", "Archaeology", "Arts, Literature and Creative Expression", "Criminology and Legal Studies", "Cultural Studies and Globalization", "Economics and Societal Development", "Educational Theories and Learning Practices", "Environmental Humanities and Social Impact", "Gender Studies and Women's Empowerment", "Geography", "Health, Wellness and Society", "History and the Modern World", "Human Rights and Social Justice", "Journalism", "Law", "Linguistics and Language Studies", "Media Studies and Communication", "Migration, Diaspora and Transnational Communities", "Philosophy and Ethics in Contemporary Society", "Political Science and Public Policy", "Psychology and Human Development", "Religion, Spirituality and Society", "Sociology of Technology and Digital Societies", "Urban Studies and Community Development"]
    },
    {
      title: "Governance and Policy Innovation",
      session: "Session 6: Governance and Policy Innovation",
      image: {
        file: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
        className: "rounded-2xl w-full md:h-96 object-center object-cover",
      },
      topics: ["Public sector innovation", "Public sector leadership and ethics", "Citizen engagement and policy reform", "Sustainability and resilience in public administration", "Climate Change Adaptation and Disaster Risk Reduction and Management"]
    }
  ];
const handleSidebarClick = (e, sessionId) => {
  e.preventDefault();
  const element = document.getElementById(sessionId);
  if (element) {
    setActiveSession(sessionId);
    const yOffset = -140; // Negative offset to move 20px *above* the element
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const sessionParam = urlParams.get('session');

    if (sessionParam) {
      setTimeout(() => {
        const element = document.getElementById(sessionParam);
        if (element) {
          setActiveSession(sessionParam);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.search]);


  return (
    <section className="p-5">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h2 className="text-2xl md:text-3xl text-center text-blue-500 font-bold">
          Session <span className="text-amber-500">Tracks</span>/<span className="text-amber-500">Call</span> for Papers
        </h2>
        <p className="text-md md:text-lg text-center">
          WCMRP-2026 offers a diverse array of session tracks designed to provide comprehensive insights and foster discussions across various disciplines.
        </p>
        <p className="text-lg text-center">
          We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to:
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-full md:w-1/4 bg-white rounded-xl shadow-md p-4 h-fit sticky top-24">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">Session Menu</h2>
            <ul className="space-y-3 text-sm text-gray-800">
              {conferenceSessions.map((s, i) => {
                const sessionId = `session-${i + 1}`;
                const isActive = activeSession === sessionId;
                return (
                  <li key={i}>
                    <a
                      href={`#${sessionId}`}
                      onClick={(e) => handleSidebarClick(e, sessionId)}
                      className={`block px-2 py-1 rounded transition-colors duration-200 ${isActive ? "bg-blue-500 text-white font-semibold" : "hover:text-blue-500"}`}
                    >
                      {s.session}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="flex  flex-col justify-center items-center  space-y-5 mt-5">
            {conferenceSessions.map((session, index) => (
              <div
                key={index}
                id={`session-${index + 1}`}
                className="container bg-gradient-to-r from-blue-100 to-cyan-100 p-5 rounded-2xl shadow-xl md:shadow-2xl space-y-2 md:space-y-5 min-w-11/12"
              >
                <h2 className="text-lg md:text-2xl text-blue-500 font-bold">
                  {session.session}
                </h2>
                <div className="flex items-center justify-center">
                  <img
                    className={session.image.className}
                    src={session.image.file}
                    alt={"image_" + session.session}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <ul className="grid md:grid-cols-2 gap-2 md:gap-3 mt-3">
                    {session.topics.map((topic, index) => (
                      <li key={index} className="inline-flex gap-2 md:gap-3 items-center md:text-md">
                        <CgPentagonRight className="text-2xl md:text-3xl text-red-500" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 w-full max-w-6xl">
          <SubmissionDeadline />
        </div>
      </div>
    </section>
  );
};

export default SessionTracks;