import React from "react";
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

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div className="fixed z-[9999] w-full flex bg-[#323B4C]">
          {navLinks.map((link, index) => {
            return (
              <NavButton
                key={index}
                className="nav-button border-b "
                to={link.to}
                title={link.title}
              />
            );
          })}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
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
