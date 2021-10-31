import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Menus from "../Menus/Menus";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Menus></Menus>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
