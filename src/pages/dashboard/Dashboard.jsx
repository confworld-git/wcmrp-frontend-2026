import React, { useEffect } from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { TbBookDownload } from "react-icons/tb";
import { HandleExcelDownload } from "./utils/utils";
import axios from "axios";

const Dashboard = () => {
  const [allData, setData] = React.useState();
  const [INR, setINR] = React.useState(0);

  const dataGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/dashboard`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        setData(response.data);

        const res = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const rate = res.data.rates.INR;
        setINR(Math.round(response.data.totalFee * rate));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    dataGet();
  }, []);

  const data = [
    {
      title: "Total Registration",
      icon: <MdOutlineAppRegistration />,
      color: "#FF7782",
      path: "/Registration",
      count: allData?.Count_Registration,
      apiPath: "registration",
    },
    {
      title: "Total Submission",
      icon: <RiFilePaper2Line />,
      color: "#CDD951",
      path: "/Submission",
      count: allData?.Count_Submission,
      apiPath: "paperSubmission",
    },
    {
      title: "Total Members",
      icon: <MdPersonAdd />,
      color: "#9B73FF",
      path: "/CommitteeMember",
      count: allData?.Count_CommitteeMember,
      apiPath: "committeeMember",
    },
    {
      title: "Total Downloads",
      icon: <HiDownload />,
      color: "#0CACEB",
      count: allData?.Count_Download,
      apiPath: "downlaod",
    },
    {
      title: "Total Enquiries",
      icon: <BsQuestionLg />,
      color: "#7380EC",
      count: allData?.Count_Enquiry,
      apiPath: "enquiry",
    },
    {
      title: "Total Contact",
      icon: <MdCall />,
      color: "#BA198B",
      count: allData?.Count_Contact,
      apiPath: "contact",
    },
  ];

  const apiHandle = async (path) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/${path}`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        HandleExcelDownload(
          response.data.data,
          `WCMRP ${path.charAt(0).toUpperCase() + path.slice(1)} Data`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-3 md:p-10 w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Home</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 p-5">
        <div className="flex flex-col min-w-80 md:w-2/7 bg-white shadow-lg p-5 rounded-2xl gap-5 transition-all duration-200 ease-in-out hover:shadow-2xl">
          <div className="flex items-center gap-5">
            <i className="bg-amber-500 w-10 h-10 flex justify-center items-center text-white text-2xl rounded-full">
              <IoMdTrendingUp />
            </i>
            <p className="text-lg font-medium">Total Amount</p>
          </div>
          <div className="relative flex flex-col gap-2">
            <h1 className="text-2xl font-black">${allData?.totalFee}</h1>
            <span className="flex items-center text-sm font-normal">
              <FaIndianRupeeSign /> {INR} Rupees
            </span>
            <div
              className="absolute p-1 right-0 bottom-0 flex justify-center items-center rounded-full cursor-pointer"
              style={{
                background:
                  "conic-gradient(#3bdea7 var(--gradient-percentage), #ffffff 0% 100%)",
                "--gradient-percentage": `${Math.round(
                  allData?.totalFee / 100
                )}%`,
              }}
            >
              <p className="w-11 h-11 flex justify-center items-center bg-[#f5f5f5] rounded-full text-base font-normal">
                {Math.round(allData?.totalFee / 100)}%
              </p>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col min-w-80 md:w-2/7 bg-white shadow-lg p-5 rounded-2xl gap-5 transition-all duration-200 ease-in-out hover:shadow-2xl"
          >
            <div className="flex items-center gap-5">
              <i
                className="w-10 h-10 flex justify-center items-center text-white text-2xl rounded-[50%]"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </i>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
            <div className="relative flex flex-col gap-2">
              <h1 className="text-2xl font-black"># {item.count}</h1>
              <span className="flex items-center text-sm font-normal">
                From Till Date
              </span>
              <div
                onClick={() => apiHandle(item.apiPath)}
                className="absolute right-0 bottom-0 p-1 bg-gray-300 hover:bg-gray-400 flex justify-center items-center rounded-[50%] cursor-pointer"
              >
                <abbr
                  className="w-10 h-10 bg-[#e7e8f1] flex items-center justify-center text-black text-lg font-normal transition-all duration-200 ease-in-out hover:bg-[#d1d2e0] rounded-[50%]"
                  title="Download Excel File"
                >
                  <TbBookDownload />
                </abbr>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
