import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader";
const LandingPage = lazy(() => import("pages/LandingPage.js"));
const ServicePage = lazy(() => import("pages/ServicePage.js"));
const POAPage = lazy(() => import("pages/PoaPage.js"));
const DSPPage = lazy(() => import("pages/DspPage.js"));
const AboutPage = lazy(() => import("pages/AboutPage.js"));
const MessagePage = lazy(() => import("pages/MessagePage.js"));
const CompanyPage = lazy(() => import("pages/CompanyPage.js"));
const AboutCompany = lazy(() => import("pages/AboutCompany.js"));
const ContactUspage = lazy(() => import("pages/ContactUspage.js"));
const CareerFormPage = lazy(() => import("pages/CareerFormPage.js"));
const MemberPage = lazy(() => import("pages/MemeberPage.js"));
const OfficeAccess = lazy(() => import("pages/OfficeAccessPage.js"));
const CareerPage = lazy(() => import("pages/CareerPage"));
const PrivacyPolicyPage = lazy(() => import("pages/PrivacyPolicyPage.js"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/service" element={<ServicePage />} />
        <Route exact path="/poa" element={<POAPage />} />
        <Route exact path="/dsp" element={<DSPPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/message" element={<MessagePage />} />
        <Route exact path="/company" element={<CompanyPage />} />
        <Route exact path="/about-company" element={<AboutCompany />} />
        <Route exact path="/contact" element={<ContactUspage />} />
        <Route exact path="/career-form" element={<CareerFormPage />} />
        <Route exact path="/member" element={<MemberPage />} />
        <Route exact path="/office-access" element={<OfficeAccess />} />
        <Route exact path='/careers' element={<CareerPage />} />
        <Route exact path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
