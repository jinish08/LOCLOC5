import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Coupon from "../components/Coupon";
import CouponCard from "../components/CouponCard";
import Navbar from "../components/Navbar";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserContext } from "../context/AuthContext";

const Home = () => {

  const [coupons, setCoupons] = useState([]);

  const { user } = useContext(UserContext)

  const readDataFromRealTimeDatabase = () => {
    const db = getDatabase();
    const starCountRef = ref(
      db,
      "org/" + user.email?.split("@")[0] + "/Coupons/"
    );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      // console.log(data)
      if(data === null){
        return
      }
      setCoupons([...Object.values(data)])
      
    });
  };

  useEffect(() => {
    readDataFromRealTimeDatabase();
  }, []);
  
  console.log(coupons)


  return (
    <div className="h-screen">
      <Navbar />
      <Banner />
      <div className="section-templates mt-[-10%] z-40 flex flex-col items-center justify-center">
        <p className="text-white text-sm md:text-3xl uppercase tracking-[10px]">
          Coupons
        </p>
        <div className="pt-[2%] flex items-center justify-center gap-8 flex-wrap w-[60vw]">
          <Coupon />{
            coupons?.map((item, index) => {
              return (
                <CouponCard
                  key={index}
                  couponCode={item.data.code}
                  couponName={item.data.title}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
