import React, { useState, useEffect } from "react";
import Side from "../../assets/woman.png";
import axios from "axios";
import Table from "../../components/Table";
import uuid from "react-uuid";

const DynamicCoupon = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserArray = (Users) => {
      let initialUsers = [];
      initialUsers = Users?.map((user) => {
        return {
          userid: uuid(),
          product: user.lhs.split(",").join(""),
          support: user.support,
        };
      });
      return initialUsers;
    };

    const getData = async () => {
      try {
        const rawResponse = await fetch(`http://localhost:5000/support/5`, {
          method: "GET",
        });
        const userData = await rawResponse.json();
        const userArray = getUserArray(userData);
        setUsers(userArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="h-screen bg-white flex w-[100vw]">
      <div className="flex flex-col items-end justify-end h-[100vh]  w-[30vw] bg-[#1A73E8]">
        <img src={Side.src} alt="" className="w-[30vw]" />
      </div>
      <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
        <div className="w-full mt-[-5%] flex items-center justify-center">
          <ul className="steps steps-vertical w-full lg:steps-horizontal">
            <li className="step step-primary">Choose</li>
            <li className="step step-primary">User Analysis</li>
            <li className="step">UI node</li>
            <li className="step">Publish Coupon</li>
          </ul>
        </div>
        <div className="flex w-[70vw] mt-[5%] mr-[3%]">
          <div className="ml-[4%] gap-6 flex flex-col pr-[4%]">
            <h1 className="text-bold text-3xl tracking-[1.5px] ">
              Performing Analysis on Users
            </h1>
            <p className="text-gray-700 text-md ">
              By performing the market basket Analysis on your user data, we
              observed that: Remember Higher support items are frequently bought
              together, we <span className="text-xl text-black">Suggest</span>{" "}
              to add discounts on items like that
            </p>
            {loading ? (
              <h1>Loading</h1>
            ) : (
              <div className="w-full">
                <Table
                  data={users}
                  columns={[
                    {
                      label: "user_id",
                      field: "userid",
                    },
                    {
                      label: "Product Links",
                      field: "product",
                    },
                    {
                      label: "Support Estimated",
                      field: "support",
                    },
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCoupon;
