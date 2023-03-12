import React, { useContext, useEffect, useState } from "react";
import Side from "../assets/create.png";
import { UserContext } from "../context/AuthContext";
const DefiningRules1 = () => {
  const [type, setType] = useState("Add ons");
  const [isChecked, setIsChecked] = useState(false);

  const { userData, setUserData, handleInputChange } = useContext(UserContext);

  const handleDropDownSelect = (e) => {
    setType(e.target.value);
    const data = userData;
    data.discountType = e.target.value;
    setUserData({ ...data });
  };

  useEffect(()=>{
    console.log(userData)
  },[userData])

  return (
    <div className="bg-white flex w-full">
      <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
        <div className="w-full mt-[-5%] flex items-center">
          <ul className="steps steps-vertical w-full lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step step-primary">Purchase</li>
            <li className="step">Receive Product</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
        <div className="flex items-start justify-start m-3 w-full mt-[4%]">
          <div className="ml-[2%] gap-6 flex flex-col">
            <h1 className="text-bold text-3xl tracking-[1.5px] ">
              Defining Rules for your Rule Engine
            </h1>
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
                  <option value="Flat Discount [%]">Flat Discount [%]</option>
                </li>
                <li>
                  <option value="Free Shipping">Free Shipping</option>
                </li>
                <li>
                  <option value="Flat Discounts [-]">Flat Discounts [-]</option>
                </li>
              </div>
            </div>
            {(type==="Flat Discount [%]" || type==="Flat Discounts [-]") && <><label>Amount</label>
            <input
              id="amount"
              type="number"
              name="discountValue"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[0.5%]"
              value={userData.discountValue}
              onChange={handleInputChange}
            /></>}
            <label>Min Cart Items</label>
            <input
              id="minCart"
              type="number"
              placeholder="Type here"
              name="minCartItems"
              className="input input-bordered input-success w-full mt-[0.5%]"
              value={userData.minCartItems}
              onChange={handleInputChange}
            />
            <label>Min Cart Amount</label>
            <input
              id="minAmount"
              type="number"
              name="minCartValue"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[0.5%]"
              value={userData.minCartValue}
              onChange={handleInputChange}
            />
            
            <button className="btn btn-primary max-w-xs mt-[2%]">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end h-[100vh]  w-[30vw] bg-blue-600">
        <img src={Side.src} alt="" className="w-[30vw]" />
      </div>
    </div>
  );
};

export default DefiningRules1;
