import Navbar from '../Navbar'
import Datepicker from "react-tailwindcss-datepicker";
import { useState, useEffect } from "react";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
const targetDate = today+"T23:59:59";
const countdownTarget = new Date(targetDate);

const getTimeLeft = () => {
    const difference = countdownTarget - new Date(); // in milliseconds
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return {hours, minutes, seconds};
};

const Dashboard = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });
  
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    });
    
  return (
    <div className="fixed bg-gray-100 min-h-screen max-h-full overflow-auto min-w-full text-gray-800">
      <Navbar />
      <div className="flex justify-center items-center flex-wrap w-full gap-10 mt-24">
        <div className = "flex justify-center items-center flex-wrap w-80 h-60 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
        </div>
        <div className = "flex justify-center items-center flex-wrap w-80 h-60 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5">
        </div>
      </div>
      <h1 className="text-4xl text-center mt-60">Dashboard</h1>
      <p>{timeLeft.hours}</p>
      <p>{timeLeft.minutes}</p>
      <p>{timeLeft.seconds}</p>
    </div>
  );
};

export default Dashboard;