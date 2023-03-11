import React, { useState } from "react";
import Side from "../assets/create.png";
const definingRules1 = () => {
  const [type, setType] = useState("Add ons");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.id);
    setIsChecked(!isChecked);
  };
  const handleDropDownSelect = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
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
            {/* <div className="flex gap-2">
              <label>Rule on User Age</label>
              <input
                id="age"
                type="checkbox"
                checked={isChecked}
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
            </div>
            <div className="flex gap-2">
              <label>Rule on Location</label>
              <input
                id="location"
                type="checkbox"
                checked={isChecked}
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
            </div>
            <div className="flex gap-2">
              <label>Rule on Income</label>
              <input
                id="age"
                type="checkbox"
                checked={isChecked}
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
            </div>
            <div className="flex gap-2">
              <label>Rule on Gender</label>
              <input
                id="age"
                type="checkbox"
                checked={isChecked}
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
            </div> */}
            <label>Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[0.5%]"
            />
            <label>Min Cart Items</label>
            <input
              id="minCart"
              type="number"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[0.5%]"
            />
            <label>Min Cart Amount</label>
            <input
              id="minAmount"
              type="number"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[0.5%]"
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

export default definingRules1;
