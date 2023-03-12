import React, { useState, useEffect } from "react";
import Side from "../../assets/woman.png";
import axios from "axios";
const DynamicCoupon = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/support/5");
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen bg-white flex w-[100vw]">
      <div className="flex flex-col items-end justify-end h-[100vh]  w-[30vw] bg-[#1A73E8]">
        <img src={Side.src} alt="" className="w-[30vw]" />
      </div>
      <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
        <div className="w-full mt-[-5%] flex items-center justify-center">
          <ul className="steps steps-vertical w-full lg:steps-horizontal">
            <li className="step step-primary">Choose</li>
            <li className="step step-primary">Recommended Users List</li>
            <li className="step">UI node</li>
            <li className="step">Publish Coupon</li>
          </ul>
        </div>
        <div className="flex items-start justify-start  w-full mt-[5%]">
          <div className="ml-[4%] gap-6 flex flex-col">
            <h1 className="text-bold text-3xl tracking-[1.5px] ">
              Performing Analysis on Users
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCoupon;
