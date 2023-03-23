import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaSms } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const styles = {
  card: `flex flex-col  w-[300px] bg-white mt-4 ml-4 rounded-2xl border-1 border-gray-300 shadow-xl relative cursor-pointer`,
  details: `flex justify-between items-center mt-2 ml-4 `,
  price: `text-indigo text-xl `,
  popularTag: `text-sm font-semibold flex items-center  absolute  rounded-l-md rounded-r-2xl p-0.5  mr-1 bg-indigo text-white rounded-r-lg w-[110px] bg-clip-border opacity-75`,
  text: `text-[#B2BEB5] text-sm`,
  image: `flex flex-col justify-end`,
  title: `text-2xl font-semibold leading-normal text-black`,
  address: `mt-1 ml-4 pb-2 text-sm text-[#B2BEB5] border-b-2 border-[#FAF9F6]`,
  information: `mt-2 flex gap-4 items-center justify-around mb-2`,
  heartIcon: `mr-2 p-2 border-2 border-[#e2e8f0] shadow-lg  rounded-2xl`,
  infoIcons: `flex items-center justify-center ml-2 `,
};
const CouponCard = ({couponCode,couponName}) => {
  return (
    <div className="bg-white w-64 h-60  rounded-xl shadow-xl flex flex-col items-start justify-between ">
      <div className="pl-4 mt-4">
        <p className="text-xl ">{couponName}</p>
        <p className="text-md text-gray-400 italic">{couponCode}</p>
      </div>

      <div className={styles.information}>
        <div className={styles.infoIcons} style={{ gap: 2 }}>
          <BsCodeSlash color="black" />
        </div>
        <div className={styles.infoIcons} style={{ gap: 2 }}>
          <FaSms color="black" />
        </div>
        <div className={styles.infoIcons} style={{ margin: "1px" }}>
          <AiOutlineMail color="black" />
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
