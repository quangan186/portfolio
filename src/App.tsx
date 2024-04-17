import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Preview from "./views/Preview";
import { navLinks } from "./constants/navlinks";
import NavButton from "./components/utilities/button/NavButton";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Educations from "./views/Educations";
import Contacts from "./components/contact/Contacts";
import WorkExperiences from "./views/WorkExperiencs";

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <>
      <BrowserRouter>
        <div className="fixed z-[9999] w-full flex bg-[#323B4C]">
          {navLinks.map((link, index) => {
            return (
              <NavButton
                key={index}
                className={`nav-button border-b border-b-[#323B4C] ${currentPath === link.to ? "isActive" : ""}`}
                to={link.to}
                title={link.title}
                onClick={() => setCurrentPath(link.to)}
              />
            );
          })}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experiences" element={<WorkExperiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
      <Contacts />
    </>
  );
};

export default App;
