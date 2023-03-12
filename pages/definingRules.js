import Router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Side from "../assets/create.png";
import { UserContext } from "../context/AuthContext";
const DefiningRules = () => {
  const router = useRouter();
  const [type, setType] = useState("Gender");
  const [isChecked, setIsChecked] = useState(false);
  const { userData, setUserData, handleInputChange } = useContext(UserContext);

  const handleDropDownSelect = (e) => {
    setType(e.target.value);
    const data = userData;
    data.gender = e.target.value;
    setUserData({ ...data});
  };

  useEffect(()=>{
    console.log(userData)
  },[userData])

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
            <label>Count of Coupons</label>
            <input
              id="count"
              type="number"
              name="couponCount"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
              value={userData.couponCount}
              onChange={handleInputChange}
            />
            <label>Max Age</label>
            <input
              id="count3"
              type="number"
              name="ageMax"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
              value={userData.ageMax}
              onChange={handleInputChange}
            />
            <label>Min Age</label>
            <input
              id="count2"
              type="number"
              name="ageMin"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
              value={userData.ageMin}
              onChange={handleInputChange}
            />
            <label>Location</label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="Type here"
              className="input input-bordered input-success w-full mt-[2%]"
              value={userData.location}
              onChange={handleInputChange}
            />
            <label>Tag</label>
            <input
              id="tag"
              type="text"
              placeholder="Type here"
              name="tag"
              value={userData.tag}
              onChange={handleInputChange}
              className="input input-bordered input-success w-full mt-[2%]"
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

export default DefiningRules;
