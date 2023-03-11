import React from "react";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";
const Coupon = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/createCoupon");
  };
  return (
    <div
      className="bg-white w-64 h-60  rounded-xl shadow-xl flex flex-col items-start justify-between"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center w-full h-[70vh] gap-2">
        <FiPlus color="blue" size={60} />
        <p className="text-blue-800">Create Coupon</p>
      </div>
    </div>
  );
};

export default Coupon;
