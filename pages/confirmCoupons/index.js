import { getDatabase, onValue, ref, update } from 'firebase/database';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/AuthContext';

const ConfirmCoupons = () => {

  const { user } = useContext(UserContext)

  const [userData, setUserData] = React.useState([])

  const readDataFromRealTimeDatabase = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "org/" + user.email?.split('@')[0] + "/users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log(data)
      setUserData([...Object.values(data)])
    });
  }

  useEffect(() => {
    readDataFromRealTimeDatabase()
  }, [])

  const makeCoupons = () => {
    userData?.map((item, index) => {

      const postData = "CPNONE";

      const db = getDatabase()

      console.log(item)

      // Get a key for a new Post.
      // const newPostKey = push(child(ref(db), 'org/'+user.email?.split('@')[0])).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['org/' + user.email?.split('@')[0] + "/users/" + item.Username + item._key + "/Coupons/" + 0] = postData;

      // console.log(updates)

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