import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaSms } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const CouponCard = () => {
  return (
    <div className="bg-white w-64 h-60  rounded-xl shadow-xl flex flex-col items-start justify-between ">
      <div className="pl-4 mt-4">
        <p className="text-xl ">Coupon Name</p>
        <p className="text-md text-gray-400 italic">Coupon Code</p>
      </div>

      <div className="pl-4 pb-4 border-t-2 border-gray-200 w-full">
        <BsCodeSlash />
        <FaSms />
        <AiOutlineMail />
      </div>
    </div>
  );
};

export default CouponCard;
