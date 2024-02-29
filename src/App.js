import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/pages/Contact/ContactUs";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import AboutUs from "./components/pages/About/AboutUs";
import Gallery from "./components/pages/Gallery/Gallery";
import Services from "./components/pages/Servicess/Services";
import Landscaping from "./components/pages/LandScaping/Landscaping";
import Farmhouse from "./components/pages/FarmHouse/Farmhouse";
import OrganicFarm from "./components/pages/OrganicFarms/OrganicFarm";
import VerticalGarden from "./components/pages/VerticalGardening/VerticalGarden";
import Irrigation from "./components/pages/Irrigation/Irrigation";
import Maintenance from "./components/pages/Maintenance/Maintenance";
import Hardscaping from "./components/pages/HardScaping/Hardscaping";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Bio" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/garden-landscape" exact element={<Landscaping />} />
        <Route path="/garden-hardscape" exact element={<Hardscaping />} />
        <Route path="/farmhouse-development" exact element={<Farmhouse />} />
        <Route
          path="/organicfarm-development"
          exact
          element={<OrganicFarm />}
        />
        <Route path="/vertical-gardening" exact element={<VerticalGarden />} />
        <Route path="/irrigation" exact element={<Irrigation />} />
        <Route path="/maintenance" exact element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
