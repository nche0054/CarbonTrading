import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import PortfolioData from "../Data/PortfolioData.json";
import PastTransactions from "./PastTransactions";
import Datepicker from "react-tailwindcss-datepicker";
import { SalesOverTimeGraph } from "../Charts/LineChartTest";
import {FaSearch, FaCalendarAlt, FaTh, FaCaretDown, FaCaretUp} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";


const PortfolioPage = () => {
    const [dateOrder, setDateOrder] = useState(false);
    const [date, setDate] = useState({
        startDate: null,
        endDate: null
      });
      const [SalesOverTimeRange, setSalesOverTimeRange] = useState(2);
    
    return ( 
        <div className="fixed bg-gray-100 min-h-screen max-h-full overflow-y-auto min-w-full text-gray-800">
            <header className="Navbar">
                <Navbar />
            </header>
            <div className = "flex justify-center items-center flex-wrap w-full gap-x-14 gap-y-7 p-6 mt-[72px]">
                <div className= "flex flex-col justify-start items-center flex-wrap w-96 p-3 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                    <h3 className="text-base font-semibold mb-1">Units Bought</h3>
                    <h1 className="text-2xl font-bold">{PortfolioData.totalBought} kgCO₂e</h1>
                </div>
                <div className= "flex flex-col justify-start items-center flex-wrap w-96 p-3 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                    <h3 className="text-base font-semibold mb-1">Units Sold</h3>
                    <h1 className="text-2xl font-bold">{PortfolioData.totalSold} kgCO₂e</h1>
                </div>
                <div className= "flex flex-col justify-start items-center flex-wrap w-96 p-3 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                    <h3 className="text-base font-semibold mb-1">Total Earned</h3>
                    <h1 className="text-2xl font-bold">RM {PortfolioData.totalProfit.toFixed(2)}</h1>
                </div>
                <div className= "flex flex-wrap justify-between items-center w-[1270px] h-[345px] p-3 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                    <div className= "flex justify-between items-center w-[1270px] h-8 pl-10 mb-2">
                        <h2 className="text-xl font-bold">Sales Over Time</h2>
                        <div className= "flex justify-between items-center w-56 mr-12">
                           
                            <button className={`w-16 text-sm py-1 ${SalesOverTimeRange===1? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setSalesOverTimeRange(1)}>Week</button>
                            <button className={`w-16 text-sm py-1 ${SalesOverTimeRange===2? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setSalesOverTimeRange(2)}>Month</button>
                            <button className={`w-16 text-sm py-1 ${SalesOverTimeRange===3? 'bg-gray-300' : 'bg-gray-100'} text-gray-900 hover:text-blue-800 rounded-lg shadow hover:bg-gray-200`} onClick={()=>setSalesOverTimeRange(3)}>Year</button>
                        </div>
                    </div>
                    <div className= "justify-center items-center w-[1270px] h-[300px] px-12 py-4">
                        <SalesOverTimeGraph timeRange={SalesOverTimeRange}/>
                    </div>
                    <hr className="h-px w-full my-4 bg-black border-1 dark:bg-black"></hr>
                </div>
    
                <div className= "flex justify-between items-center w-[1270px] h-8 mt-6 mb-2">
                    <div className = "flex justify-start items-center w-72 h-14 p-4 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5">
                        <span><FaSearch/></span>
                        <span>
                        <input
                         className="text-xl font-bold text-black w-60 p-3 border-none bg-transparent focus:outline-none"
                         placeholder = "Name"
                         type = "text"
                         /></span>
                    </div>
                    <div className = "flex justify-start items-center w-72 h-14 p-4 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5">
                        <span><FaCalendarAlt/></span>
                        <span>
                        <Datepicker asSingle={false} useRange={false} displayFormat="DD/MM/YYYY"
                            toggleClassName="absolute text-transparent right-0 p-0"
                            className="text-lg font-light w-72"
                            value={date} onChange={newDate => setDate(newDate)} /></span>
                        {/* <button className = "w-40 bg-transparent text-xl font-bold text-gray-400">Date</button></span> */}
                    </div>
                    <div className = "flex justify-start items-center w-60 h-14 p-4 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5">
                        <span><FaTh/></span>
                        <span>
                        <button className = "w-40 bg-transparent text-xl font-bold text-gray-400">Type</button></span>
                    </div>
                    <div className = "flex justify-start items-center w-60 h-14 p-4 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5">
                        <span><FaListCheck/></span>
                        <span>
                        <button className = "w-40 bg-transparent text-xl font-bold text-gray-400">Status</button></span>
                    </div>
                </div>
                <div className= "flex justify-between items-center w-[1270px] h-12 bg-white rounded-lg shadow-xl ring-1 ring-slate-900/5">
                    <h2 className="text-lg font-bold p-4 w-96 text-center">Name</h2>
                    <div className = "flex">
                        <h2 className="text-lg font-bold p-4 ">Date</h2>
                        <button onClick={() => setDateOrder(!dateOrder)}>{dateOrder ? <FaCaretUp /> : <FaCaretDown />}</button>
                    </div>
                    <h2 className="text-lg font-bold p-4 w-52 text-center ml-4">Type</h2>
                    <h2 className="text-lg font-bold p-4 w-28 text-center">Status</h2>
                    <h2 className="text-lg font-bold p-4 text-center pr-6">Units &#40;kgCO₂e&#41;</h2>
                    <h2 className="text-lg font-bold p-4 w-36 text-start pl-8">Price</h2>
                </div>
                <div className= "flex justify-center items-start w-[1270px] h-96 -mt-1 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                    <PastTransactions order={dateOrder}/>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;