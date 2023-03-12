import { getDatabase, onValue, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import Side from "../../assets/woman.png";
import { UserContext } from "../../context/AuthContext";

const DynamicPage3 = () => {
    const [userData, setUserData] = useState([]);
    const { market, setMarket } = useContext(UserContext);

  const readDataFromRealTimeDatabase = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "org/jinishshah08/users");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUserData([...Object.values(data)]);
    });

  };
  const filterUserData = () => {
    const newArr = []
      userData.forEach((user) => {
          console.log(user);
          if ((user.Product_1 == market[0] || user.Product_2 == market[0] || user.Product_3 == market[0] || user.Product_4 == market[0] || user.Product_5 == market[0]) && (user.Product_1 == market[1] || user.Product_2 == market[1] || user.Product_3 == market[1] || user.Product_4 == market[1] || user.Product_5 == market[1] )){
              console.log("Found ", user);
              newArr.push(user);
          }
      });
      console.log(newArr);
  }
const [userSatisfy, setUserSatisfy] = useState([]);
  const [type, setType] = useState("Select Mode of Delivery");
  const handleDropDownSelect = (e) => {
    console.log(e);
    setType(e.target.value);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    readDataFromRealTimeDatabase();
  }, []);

  useEffect(()=>{
      filterUserData();
  },[userData])

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
            <li className="step step-primary">Mode of Delivery</li>
            <li className="step">Publish Coupon</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center w-[70vw] mt-[4%]">
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
                <option value="SMS">SMS</option>
              </li>
              <li>
                <option value="EMAIL">EMAIL</option>
              </li>
              <li>
                <option value="UI Node">UI Node</option>
              </li>
            </div>
          </div>
          {type === "SMS" ? (
            <div className="mt-[10%]">
              <h1 className="text-bold text-lg ">Enter Phone Number</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-success w-full mt-[2%]"
                onChange={handleInputChange}
                name="name"
              />
              <h1 className="text-bold text-lg ">Enter Phone Number</h1>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-success w-full mt-[2%]"
                onChange={handleInputChange}
                name="name"
              />
            </div>
          ) : null}
          {type === "EMAIL" ? <div>hiii</div> : null}
          {type === "UI Node" ? <div>hiii</div> : null}
        </div>
      </div>
    </div>
  );
};

export default DynamicPage3;
