import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "jinishshah08@gmail.com",
  });
  const [userData, setUserData] = useState({
    name: "DELL30",
    couponType: "Static Coupon",
    couponCount: "200",
    ageMin: "18",
    ageMax: "40",
    location: "India",
    tag: "Electronics",
    gender: "Male",
    discountType: "Flat Discount [%]",
    minCartItems: "2",
    minCartValue: "200",
    discountValue: "15",
    expiryDate: "01/07/2023",
    bgColor: "",
    title: "Flat 15% Off on Phone Cases",
    code: "DELL30",
    image: "",
  });


  const [market, setMarket] = useState(["Mouse" ,"PhoneCase"]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  
  useEffect(()=>{
    console.log(userData)
},[userData])

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        googleLogin,
        userData,
        setUser,
        setUserData,
        handleInputChange,
        setMarket,
        market,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
