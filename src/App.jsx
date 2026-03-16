import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/home/Home";
import AboutWCMRP from "./pages/about/About_WCMPR/AboutWCMRP";
import AboutOrganizer from "./pages/about/About_Organizer/AboutOrganizer";
import Speakers from "./pages/Speakers/Speakers";
import OrganizingCommitteeMembers from "./pages/Speakers/OrganizingCommitteeMembers";
import ApplyingForOrganizingCommitteeMembers from "./pages/Speakers/ApplyingForOrganizingCommitteeMembers";
import SessionTracks from "./pages/session/SessionTracks";
import EssentialDownloads from "./pages/session/EssentialDownloads";
import Publication from "./pages/publication/Publication";
import SubmissionGuidelines from "./pages/submission/SubmissionGuidelines";
import Submission from "./pages/submission/Submission";
import RegistrationFee from "./pages/registration/RegistrationFee";
import Success from "./components/Success/Success";
import AvailablePayments from "./pages/registration/AvailablePayments";
import RegistrationInstructions from "./pages/registration/RegistrationInstructions";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import Venue from "./pages/venue/Venue";
import Sponsors from "./pages/sponsors/Sponsors";
import FAQ from "./pages/faq/faq";
import Contact from "./pages/contact/Contact";
import Productive from "./components/productive/Productive";
// {/* dashboard */}
import Login from "./pages/login/Login";
import DashboardLayout from "./pages/dashboard/Dashboard_Layout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import DRegistration from "./pages/dashboard/registration/Registration";
import DSpeakers from "./pages/dashboard/speakers/Speakers";
import DSubmission from "./pages/dashboard/submission/Submission";
import DCommitteeMember from "./pages/dashboard/Committee_Member/CommitteeMember";
import DContact from "./pages/dashboard/contact/Contact";
import DDownload from "./pages/dashboard/download/Download";
import DEnquiry from "./pages/dashboard/enquiries/Enquiries";
import CouponManagement from "./pages/dashboard/CouponManagement";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/AboutWCMRP" element={<AboutWCMRP />} />
          <Route path="/AboutOrganizer" element={<AboutOrganizer />} />
          <Route path="/Speakers" element={<Speakers />} />
          <Route
            path="/OrganizingCommitteeMembers"
            element={<OrganizingCommitteeMembers />}
          />
          <Route
            path="/ApplyingForOrganizingCommitteeMembers"
            element={<ApplyingForOrganizingCommitteeMembers />}
          />
          <Route path="/SessionTracks" element={<SessionTracks />} />
          <Route path="/EssentialDownloads" element={<EssentialDownloads />} />
          <Route path="/Publication" element={<Publication />} />
          <Route path="/Submission" element={<Submission />} />
          <Route
            path="/SubmissionGuidelines"
            element={<SubmissionGuidelines />}
          />
          <Route path="/RegistrationFee" element={<RegistrationFee />} />
          <Route path="/Payment_Details_Success" element={<Success />} />
          <Route path="/AvailablePayments" element={<AvailablePayments />} />
          <Route
            path="/RegistrationInstructions"
            element={<RegistrationInstructions />}
          />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/Sponsors" element={<Sponsors/>} />
          <Route path="/Venue" element={<Venue />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        {/* login */}
        <Route path="/Login" element={<Login />} />
        {/* productive route dashboard */}

        <Route path="/" element={<Productive />}>
          <Route path="/Dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Registration" element={<DRegistration />} />
            <Route path="Speakers" element={<DSpeakers />} />
            <Route path="Submission" element={<DSubmission />} />
            <Route path="CommitteeMember" element={<DCommitteeMember />} />
            <Route path="Contact" element={<DContact />} />
            <Route path="Downloads" element={<DDownload />} />
            <Route path="Enquiries" element={<DEnquiry />} />
            <Route path="CouponManagement" element={<CouponManagement />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
