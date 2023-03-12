import { getDatabase, onValue, ref, update } from 'firebase/database';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/AuthContext';

const ConfirmCoupons = () => {

  const { user ,userData:couponData ,designData } = useContext(UserContext)

  const [userData, setUserData] = React.useState([])
  const [userKeys, setUserKeys] = React.useState([])

  const readDataFromRealTimeDatabase = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "org/" + user.email?.split('@')[0] + "/users/");
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
  }

  useEffect(() => {
    readDataFromRealTimeDatabase()
  }, [])

  const makeCoupons = () => {
    const couponD = couponData;
    const designD = designData;
    const totalData = { ...couponD, ...designD }
    const postData = designD?.code;
    const db = getDatabase()
    const globalUpdates = {}
    userData?.map((item, index) => {
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
              fact:"location",
              operator:"equal",
              value:totalData.location
            },
            {
              fact:"cartValue",
              operator:"greaterThanInclusive",
              value:totalData.minCartValue
            },
            {
              fact:"cartItems",
              operator:"greaterThanInclusive",
              value:totalData.minCartItems
            },
          ],
        },
        event: {
          type: "adult-content-blocked",
        },
      };

      totalData.rule = rule

      // Get a key for a new Post.
      // const newPostKey = push(child(ref(db), 'org/'+user.email?.split('@')[0])).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      
      updates['org/' + user.email?.split('@')[0] + "/users/" + item.Username + item._key + "/Coupons/" + item.CouponsLength] = postData;
      updates["org/" + user.email?.split('@')[0] + "/users/" + item.Username + item._key + "/CouponsLength"] = item.CouponsLength + 1
      updates["org/" + user.email?.split('@')[0] + "/Coupons/" + totalData?.code + "/data"] = totalData
      updates["org/" + user.email?.split('@')[0] + "/Coupons/" + totalData?.code + "/userIdList"] = userKeys

      update(ref(db), updates);
    })
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={makeCoupons}>Button</button>
    </div>

  )
}

export default ConfirmCoupons