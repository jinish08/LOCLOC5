import { getDatabase, onValue, ref, update } from "firebase/database";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/AuthContext";
import Side from "../../assets/create.png";
import { useRouter } from "next/router";
const ConfirmCoupons = () => {

  const router = useRouter();

  const { user ,userData:couponData ,designData } = useContext(UserContext)

  const [userData, setUserData] = React.useState([])
  const [userKeys, setUserKeys] = React.useState([])

  const readDataFromRealTimeDatabase = () => {
    const db = getDatabase();
    const starCountRef = ref(
      db,
      "org/" + user.email?.split("@")[0] + "/users/"
    );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      // console.log(data)
      if(data === null){
        return
      }
      setUserData([...Object.values(data)])
      setUserKeys([...Object.keys(data)])
      
    });
  };

  useEffect(() => {
    readDataFromRealTimeDatabase();
  }, []);

  const makeCoupons = () => {
    const couponD = couponData;
    const totalData = couponD
    const postData = totalData?.code;
    userData?.map((item, index) => {

      const db = getDatabase();

      const rule = {
        conditions: {
          all: [
            {
              fact: "age",
              operator: "greaterThanInclusive",
              value: totalData.ageMin,
            },
            {
              fact: "age",
              operator: "lesserThanInclusive",
              value: totalData.ageMax,
            },
            {
              fact: "location",
              operator: "equal",
              value: totalData.location,
            },
            {
              fact: "cartValue",
              operator: "greaterThanInclusive",
              value: totalData.minCartValue,
            },
            {
              fact: "cartItems",
              operator: "greaterThanInclusive",
              value: totalData.minCartItems,
            },
          ],
        },
        event: {
          type: "adult-content-blocked",
        },
      };

      totalData.rule = rule;

      // Get a key for a new Post.
      // const newPostKey = push(child(ref(db), 'org/'+user.email?.split('@')[0])).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      
      updates['org/' + user.email?.split('@')[0] + "/users/" + item.Username + item._key + "/Coupons/" + item.CouponsLength] = postData;
      updates["org/" + user.email?.split('@')[0] + "/users/" + item.Username + item._key + "/CouponsLength"] = item.CouponsLength + 1
      updates["org/" + user.email?.split('@')[0] + "/Coupons/" + totalData?.code + "/data"] = totalData
      updates["org/" + user.email?.split('@')[0] + "/Coupons/" + totalData?.code + "/userIdList"] = userKeys

      if(userData?.length && userData.length > 0)update(ref(db), updates);
    });
    router.push("/home");
  };

  return (
    <div className="bg-white flex w-full">
      <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
        <div className="w-full mt-[-5%] flex items-center">
          <ul className="steps steps-vertical w-full lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step step-primary">Purchase</li>
            <li className="step step-primary">Design</li>
            <li className="step step-primary">Receive Product</li>
          </ul>
        </div>
        <div className="flex items-start justify-start m-3 w-full mt-[4%]">
          <div className="ml-[2%] gap-6 flex flex-col">
            <h1 className="text-bold text-3xl tracking-[1.5px] ">
              Confirming your purchase
            </h1>
            <p></p>

            <div className="card w-[60vw] bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  Information about your customized coupon!
                </h2>
                <p className="text-lg">Title: {couponData.code}</p>
                <p className="text-lg">Type: {couponData.couponType}</p>
                <p className="text-lg">
                  Number of coupons generated: {couponData.couponCount}
                </p>
                <p className="text-lg">
                  Price [0.5* count] : ${couponData.couponCount * 0.5}
                </p>
              </div>
            </div>
            <button
              className="btn btn-primary max-w-xs mt-[2%]"
              onClick={makeCoupons}
            >
              Confirm
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

export default ConfirmCoupons;
