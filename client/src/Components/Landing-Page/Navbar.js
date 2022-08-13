import React from "react";
import Fronttext from "./Fronttext/Fronttext";

import Header from "../Header/Header";
import Services from "../Services/Services";
import Customize from "../Custom/Customize";
import Features from "../Features/Features";
import Plan from "../Plan/Plan";
import Faq from "../Faq/Faq";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

import Discount from "../Discount/Discount";
// import Test from "../Test/Test";
// import Test from '../Team/Test'

export const Navbar = () => {
  return (
    <>
      <Header />
      <Fronttext />
      <Services />
      <Customize />
      <Features/>
      <Plan/>
      <Faq/>
      {/* <About/> */}
      <Discount/>
      <Team/>
      {/* <Array/>s */}
      {/* <Test/> */}
      <Footer/>
      
    </>
  );
};
