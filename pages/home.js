import React from "react";
import Banner from "../components/Banner";
import CouponCard from "../components/CouponCard";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
      <div className="section-templates mt-[-10%] z-40 flex flex-col items-center justify-center">
        <p className="text-white text-sm md:text-3xl uppercase tracking-[10px]">
          Coupons
        </p>
        <div className="pt-[2%] flex items-center justify-center gap-8 flex-wrap w-[60vw]">
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </div>
      </div>
    </div>
  );
};

export default home;
