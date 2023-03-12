import Head from "next/head";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Calender from "../components/calendar/Calender";
// import Register from "../components/Register";
// import Analytics from "../components/Analytics";
// import Sidebar from "../components/Sidebar";
// import Landing from "../components/Landing";

export const userData = [
  {
    name: "Jan",
    "Coupons used": 4000,
  },
  {
    name: "Feb",
    "Coupons used": 3000,
  },
  {
    name: "Mar",
    "Coupons used": 5000,
  },
  {
    name: "Apr",
    "Coupons used": 4000,
  },
  {
    name: "May",
    "Coupons used": 3000,
  },
  {
    name: "Jun",
    "Coupons used": 2000,
  },
  {
    name: "Jul",
    "Coupons used": 4000,
  },
  {
    name: "Agu",
    "Coupons used": 3000,
  },
  {
    name: "Sep",
    "Coupons used": 4000,
  },
  {
    name: "Oct",
    "Coupons used": 1000,
  },
  {
    name: "Nov",
    "Coupons used": 4000,
  },
  {
    name: "Dec",
    "Coupons used": 3000,
  },
];


export default function Home() {


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      {/* <Landing /> */}
      </Head>
        <Hero />
    </div>
  );
}
