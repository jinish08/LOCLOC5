import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
    </div>
  );
};

export default home;
