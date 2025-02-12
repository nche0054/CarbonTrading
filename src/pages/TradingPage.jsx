import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Navbar from "./Navbar";

const Dashboard = () => {
  const biddingChartRef = useRef(null); // Ref for Bidding Chart
  const co2ChartRef = useRef(null); // Ref for CO2 Chart
  const biddingCanvasRef = useRef(null);
  const co2CanvasRef = useRef(null);

  // Data for Bidding Statistics Chart
  const biddingData = {
    labels: ["24/12", "25/12", "26/12", "27/12", "28/12", "29/12", "30/12"],
    datasets: [
      {
        label: "Average Bidding Price",
        data: [2.5, 2.8, 2.9, 3.1, 3.5, 3.6, 4],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Own Bidding Price",
        data: [2, 2.2, 2.3, 2.7, 3, 3.4, 3.8],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Data for CO2 Chart
  const co2Data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Renewable Energy",
        data: [150000, 160000, 170000, 180000, 190000, 200000],
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Blue Carbon",
        data: [50000, 60000, 70000, 80000, 90000, 100000],
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  // Initialize and Destroy Charts
  useEffect(() => {
    // Initialize Bidding Chart
    if (biddingCanvasRef.current) {
      biddingChartRef.current = new Chart(biddingCanvasRef.current, {
        type: "line",
        data: biddingData,
        options: {
          responsive: true,
        },
      });
    }

    // Initialize CO2 Chart
    if (co2CanvasRef.current) {
      co2ChartRef.current = new Chart(co2CanvasRef.current, {
        type: "line",
        data: co2Data,
        options: {
          responsive: true,
        },
      });
    }

    // Cleanup on Unmount
    return () => {
      if (biddingChartRef.current) {
        biddingChartRef.current.destroy();
      }
      if (co2ChartRef.current) {
        co2ChartRef.current.destroy();
      }
    };
  }, []); // Run only once after the component mounts

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="Navbar">
        <Navbar />
      </header>
      {/* Main Content */}
      <main className="container mx-auto p-10 py-20 space-y-8">
        {/* New Bidding Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">New Bidding</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-100 py-3 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-200">
                Selling
              </button>
              <button className="bg-gray-100 py-3 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-200">
                Buying
              </button>
            </div>
            <p className="text-gray-500 mt-4">Time left until market closing: 18 hours 38 minutes</p>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">Bids made today:</p>
              <p className="font-semibold">Selling - Blue Carbon - 350 kgCO2e - RM 19,205</p>
            </div>
          </div>

          {/* Bidding Statistics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Bidding Statistics</h2>
              <button className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg"># Filter</button>
            </div>
            <div className="mt-4">
              <canvas ref={biddingCanvasRef} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
