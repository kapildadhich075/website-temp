import React, { useState } from "react";
import HeroSection from "../HeroSection/Index";
import NavBar from "../Navbar/Index";
import Sidebar from "../Sidebar/Index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
