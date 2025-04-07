import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import useFetch from "../../../hooks/hooks/useFetch";
import ErrorPage from "../../Error/ErrorPage";
import Navbar from "../Navbar";
import { BiddingStatsGraph } from "../Charts/LineChartTest";
import { motion } from 'framer-motion';
import { PastTradesGraph } from "../Charts/LineChartTest";
import EditBidCard from "./EditBidCard";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const EditBid = () => {
  const { id } = useParams();
  const { data: bid,  error, isPending } = useFetch('http://localhost:8000/bids/' + id);
  const [BiddingStatsRange, setBiddingStatsRange] = useState(1);
  const [PastTradesRange, setPastTradesRange] = useState(3);
    
  return (
    <div className="fixed bg-gray-100 min-h-screen max-h-full overflow-auto min-w-full text-gray-800">
      {/* {error && <div>{ error }</div>} */}
      {bid && (
        <div>
          <header className="Navbar">
            <Navbar />
          </header>

          <div className = "flex justify-center items-center flex-wrap w-full gap-10 mt-4"> 
            <div className= "flex justify-center items-center flex-wrap w-550 h-96 -mt-8 ml-8">
              <EditBidCard bid={bid}/>
            </div>
          

            <div className= "justify-start items-start mt-20 mr-6 rounded-3xl bg-white px-6 py-8 w-780 h-[500px] shadow-xl ring-1 ring-slate-900/5">
              <div className= "flex justify-between items-center mb-4">
                <h2 className="-mt-2 ml-3 text-xl font-bold max-sm:text-lg">Bidding Stats</h2>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <button className="-mt-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-700 hover:bg-gray-200"># Filter</button>
                </motion.div>
              </div>
              <hr className="h-px -my-2 bg-gray-200 border-1 dark:bg-gray-700 mb-3"></hr>
              <div className= "flex justify-end items-start px-5 gap-4">
                <button className={`w-10 text-sm py-1 ${BiddingStatsRange===1 ? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setBiddingStatsRange(1)}>1W</button>
                <button className={`w-10 text-sm py-1 ${BiddingStatsRange===2? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setBiddingStatsRange(2)}>1M</button>
                <button className={`w-10 text-sm py-1 ${BiddingStatsRange===3? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setBiddingStatsRange(3)}>6M</button>
                <button className={`w-10 text-sm py-1 ${BiddingStatsRange===4? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setBiddingStatsRange(4)}>1Y</button>
              </div>
                          
              <BiddingStatsGraph timeRange={BiddingStatsRange}/>

            </div>
          </div>
          <div className= "flex flex-wrap justify-center items-start ml-[75px] my-6 rounded-2xl bg-white px-6 py-6 w-[1370px] h-[580px] shadow-lg ring-1 ring-slate-900/5">
            <div className= "flex justify-between items-center w-[1370px] h-6 -mt-1 mb-4">
              <div className= "flex justify-between items-center ml-32 w-56">
                <button className={`w-16 text-sm py-1 ${PastTradesRange==1 ? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setPastTradesRange(1)}>Weekly</button>
                <button className={`w-16 text-sm py-1 ${PastTradesRange==2 ? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setPastTradesRange(2)}>Monthly</button>
                <button className={`w-16 text-sm py-1 ${PastTradesRange==3 ? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setPastTradesRange(3)}>Yearly</button>
              </div>
              <div className= "flex justify-between items-center w-64">
                <div className= "flex justify-between items-center w-20 gap-4">
                  <button className="w-8 text-2xl py-0 bg-gray-100 text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200">&lt;</button>
                  <button className="w-8 text-2xl py-0 bg-gray-100 text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200">&gt;</button>
                </div>
                <div className= "w-20">
                  <button className="text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded-lg hover:text-gray-700 hover:bg-gray-200"># Filter</button>
                </div>
              </div>
            </div>
            <div className= "justify-center items-center w-[1370px] h-[510px]">
              <PastTradesGraph timeRange={PastTradesRange}/>
            </div>
          </div>
        </div>
      )}
    </div> 
  );
}

export default EditBid;