import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Career from "./components/Career";
import AboutPage from "./components/AboutPage";
import Home from "./components/Home";
import OurWorks from "./components/OurWorks";
import HowWeWork from "./components/HowWeWork";
import OurStatsSection from "./components/OurStatsSection";
import Services from "./components/Services";
import Team from "./components/Team";
import WebApp from "./components/WebApp";
import WeOffer from "./components/WeOffer";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
//import Projects from "./components/Projects";
import MobileApp from "./components/MobileApp";
import AIML from "./components/AIML";
import DesignBranding from "./components/DesignBranding";
import DigitalMarket from "./components/DigitalMarket";
import Seo from "./components/Seo";
 
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/career" element={<Career />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/howwework" element={<HowWeWork />} />
          <Route path="/ourstatssection " element={<OurStatsSection />} />
          <Route path="/weoffer" element={<WeOffer />} />
          <Route path="/aiml" element={<AIML />} />
          <Route path="/design" element={<DesignBranding />} />
          <Route path="/digital" element={<DigitalMarket />} />
          <Route path="/seooptimize" element={<Seo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
