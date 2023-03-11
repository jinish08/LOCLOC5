import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscRocket } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
let Links = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "REPORTS",
    link: "/",
  },
  { name: "LOGOUT", link: "/" },
];
const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="md:flex items-center justify-between   py-4 md:py-2 px-7 h-20">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="font-bold text-lg md:text-2xl cursor-pointer flex items-center font-[Poppins] 
      "
      >
        <span className="text-3xl  mr-1">
          <ion-icon name="logo-ionic">
            <VscRocket />
          </ion-icon>
        </span>
        Coupon Generator
      </motion.div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-5 cursor-pointer z-10 md:hidden"
      >
        <ion-icon name={open ? "close" : "menu"} className="mb-8">
          {!open ? <GiHamburgerMenu /> : <RxCross1 />}
        </ion-icon>
      </div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center justify-end"
      >
        <ul
          className={`justify-center items-center md:flex   md:pb-0 pb-12 absolute md:static  pl-8   left-0 w-full  transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
              {link.name !== "LOGOUT" ? (
                <div
                  // href={link.link}
                  className=" duration-500"
                  onClick={link.onclick}
                >
                  {link.name}
                </div>
              ) : (
                <button
                  // href={link.link}
                  className="btn btn-primary"
                  onClick={link.onclick}
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
