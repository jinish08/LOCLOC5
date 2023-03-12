import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Sidebar from "../components/Sidebar";
import UserList from "./UserList";

function Analytics({ title, data, dataKey, grid }) {
  

  return (

      <>
      <Sidebar />
      <div className="pl-72">
      <div className="w-full flex justify-between">
      <div className="cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] mx-5 my-0 p-[30px] rounded-[10px];
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75)">
        <span className="text-xl">Impressions</span>
        <div className="flex items-center mx-0 my-2.5">
          <span className="text-3xl font-semibold">2,415</span>
          <span className="flex items-center ml-5">
            -11.4 <ArrowDownward className="text-sm text-[green] ml-[5px] text-[red]" />
          </span>
        </div>
        <span className="text-[red]">Compared to last month</span>
      </div>
      <div className="flex-[1] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] mx-5 my-0 p-[30px] rounded-[10px];
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75)">
        <span className="text-xl">Uses</span>
        <div className="flex items-center mx-0 my-2.5">
          <span className="text-3xl font-semibold">1,332</span>
          <span className="flex items-center ml-5">
            -1.4 <ArrowDownward className="text-sm text-[green] ml-[5px] text-[red]" />
          </span>
        </div>
        <span className="text-[15px] text-[gray]">Compared to last month</span>
      </div>
      <div className="flex-[1] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] mx-5 my-0 p-[30px] rounded-[10px];
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75)">
        <span className="text-xl">Conversation</span>
        <div className="flex items-center mx-0 my-2.5">
          <span className="text-3xl font-semibold">0.5515</span>
          <span className="flex items-center ml-5">
            +0.04 <ArrowUpward className="text-sm text-[green] ml-[5px]" />
          </span>
        </div>
        <span className="text-[15px] text-[gray]">Compared to last month</span>
      </div>
      <div className="flex-[1] cursor-pointer shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] mx-5 my-0 p-[30px] rounded-[10px];
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75)">
        <span className="text-xl">Sales</span>
        <div className="flex items-center mx-0 my-2.5">
          <span className="text-3xl font-semibold">₹2,225</span>
          <span className="flex items-center ml-5">
            +2.4 <ArrowUpward className="text-sm text-[green] ml-[5px]" />
          </span>
        </div>
        <span className="text-[15px] text-[gray]">Compared to last month</span>
      </div>
    </div>
    <div className="shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.75)] m-5 p-5;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75)">
        <h3 className="mb-5">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
      <UserList/>
      
      </>
  );
}

export default Analytics;