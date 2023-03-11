import React from "react";
import hero from "../assets/Rectangle.png";
const Banner = () => {
  return (
    <div class="md:pt-0 md:p-0 w-full bg-[#1A73E8] z-20 ">
      <div className="flex items-center justify-between">
        <img
          src="https://www.gstatic.com/mobilesdk/190805_mobilesdk/woman-at-desktop@2x.png"
          alt=""
          className="h-[40vh] p-4"
        />
        <img
          src="https://www.gstatic.com/mobilesdk/190805_mobilesdk/man-at-desktop@2x.png"
          alt=""
          className="h-[40vh] p-4"
        />
      </div>
    </div>
  );
};

export default Banner;
