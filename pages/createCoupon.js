import React, { useContext, useEffect, useState } from "react";
import Side from "../assets/create.png";
import { useRouter } from "next/router";
import { UserContext } from "../context/AuthContext";
import RangeSlider from "../components/RangeSlider"
const CreateCoupon = () => {
  const router = useRouter();
  const [type, setType] = useState("Select type of Coupon");
  const {userData,setUser,handleInputChange} = useContext(UserContext)
  const handleDropDownSelect = (e) => {
    setType(e.target.value);
    const data = userData
    data.couponType = e.target.value
    setUser({...data})
  };

  const handleContinue = () => {
    if(type === "Dynamic Coupon"){
      router.push("/dynamicCoupon")
    }
    else{
      router.push("/definingRules");
    }
  };

  return (
    <div className="bg-white h-screen flex w-full">
      <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
        <div className="w-full mt-[-5%] flex items-center justify-center">
          <ul className="steps steps-vertical w-full lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
        <div className="flex items-start justify-start m-3 w-full mt-[10%]">
          <div className="ml-[2%] gap-6 flex flex-col">
            <h1 className="text-bold text-3xl tracking-[1.5px] ">
              Lets Start with a Name for your Coupon
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
              onChange={handleInputChange}
              name="name"
              value={userData.name}
            />
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1">
                {type}
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                onClick={handleDropDownSelect}
              >
                <li>
                  <option value="Static Coupon">Static Coupon</option>
                </li>
                <li>
                  <option value="Dynamic Coupon">Dynamic Coupon</option>
                </li>
              </div>
            </div>

            <button
              className="btn btn-primary max-w-xs mt-[2%]"
              onClick={handleContinue}
            >
              Continue
            </button>
            <RangeSlider className="w-40 h-8" defaultValue={[25,75]}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end h-screen w-[30vw] bg-blue-600">
        <img src={Side.src} alt="" className="w-[30vw]" />
      </div>
    </div>
  );
};

export default CreateCoupon;
