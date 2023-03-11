import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import Side from "../assets/create.png";
const definingRules = () => {
  const router = useRouter();
  const [type, setType] = useState("Gender");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.id);
    setIsChecked(!isChecked);
  };
  const handleDropDownSelect = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  const handleClick = () => {
    router.push("/definingRules1");
  };
  return (
    <div className="bg-white flex w-full">
      <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
        <div className="w-full mt-[-5%] flex items-center">
          <ul className="steps steps-vertical w-full lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
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
            <label>Count of Coupons</label>
            <input
              id="count"
              type="number"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
            />
            <label>Age</label>
            <input
              id="age"
              type="range"
              min="0"
              max="100"
              value="40"
              className="range"
            />
            <label>Location</label>
            <input
              id="location"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
            />
            <label>Income</label>
            <input
              id="income"
              type="range"
              min="0"
              max="100"
              value="40"
              className="range"
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
                  <option value="Male">Male</option>
                </li>
                <li>
                  <option value="Female">Female</option>
                </li>
              </div>
            </div>
            <button
              className="btn btn-primary max-w-xs mt-[2%]"
              onClick={handleClick}
            >
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

export default definingRules;
