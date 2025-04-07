import { useState, useEffect } from "react";
import {Link, useNavigate } from 'react-router-dom';
import Slider from "./SliderBar";
import ProjectTypeDropdown from "./Dropdowns";
import CountdownTimer from "./CountdownTimer";

const EditBidCard = ({bid}) => {
    const [ProjectName, SetProjectName] = useState(bid.ProjectName);
    const [projectType, setProjectType] = useState(bid.projectType);
    const [CarbonCredits, SetCarbonCredits] = useState(bid.CarbonCredits);
    const [unitPrice, SetUnitPrice] = useState(bid.unitPrice);
    const [bidType, SetBidType] = useState(bid.bidType);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // e.preventDefault();
        const newBid = {ProjectName, projectType, bidType, CarbonCredits, unitPrice};    
        fetch('http://localhost:8000/bids',{
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newBid)
        }).then(() => {
          deleteBid({bidID: bid.id});
          navigate('/trading');
        })
    }

    const deleteBid = ({bidID}) => {
        fetch('http://localhost:8000/bids/' + bidID, {
            method: 'DELETE'
        }).then(() => {
            // window.location.reload();
            navigate('/trading');
        })
    }
    

    if  (bid.bidType === 'Selling') {
        return (
            <div>
                <div className= "overflow-y-auto justify-start items-start mx-6 rounded-3xl bg-white px-6 py-6 w-550 h-[464px] shadow-lg ring-1 ring-slate-900/5">
                <h2 className="ml-3 text-xl font-bold max-sm:text-lg mb-4">Edit Bid</h2>
                <hr className="h-px -my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
                <form onSubmit={handleSubmit}>
                    <div className= "flex flex-col justify-start items-start px-2 py-4">
                    <p className="text-gray-700 text-sm font-normal mt-2 mb-2">Project Name:</p>
                    <input
                            type="text"
                            required
                            className="w-[465px] py-2 px-4 rounded-lg border-1 border-gray-500 text-gray-700 bg-[#FDFDFD]"
                            value = {ProjectName}
                            onChange={(e)=> SetProjectName(e.target.value)}
                        />
                    <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Project Type:</p>
                    <ProjectTypeDropdown
                        selectedOption = {projectType}
                        setSelectedOption = {setProjectType}/>
                    <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Carbon Credits:</p>
                    <Slider 
                        label="Carbon Credits"
                        min={500}
                        max={20000}
                        step={100}
                        unit="kgCO₂e"
                        posRight= {true}
                        decimal = {false}
                        value = {CarbonCredits}
                        setValue = {SetCarbonCredits}
                    />
                    <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Unit Price:</p>
                    <Slider 
                        label="Price"
                        min={0.10}
                        max={3.00}
                        step={0.10}
                        unit="RM"
                        posRight= {false}
                        decimal= {true}
                        value={unitPrice}
                        setValue={SetUnitPrice}
                    />
                    <button type="submit" className="w-60 text-lg bg-gray-100 py-3 text-gray-900 hover:text-blue-800 font-semibold rounded-lg shadow hover:bg-gray-200 mt-5 ml-28">Submit</button>
                    
                    </div>
                </form>
                </div>
                <CountdownTimer/>
                {/* <p className="text-gray-700 text-base/4 font-medium my-4 ml-10">Time left until market closing: 5 hours 14 minutes</p> */}
            </div>
    );
    }
    else if (bid.bidType === 'Bidding') {
        return (
            <div>
              <div className= "overflow-y-auto justify-start items-start mx-6 rounded-3xl bg-white px-6 py-6 w-550 h-[464px] shadow-lg ring-1 ring-slate-900/5">
                <h2 className="ml-3 text-xl font-bold max-sm:text-lg mb-4">Edit Bid</h2>
                <hr className="h-px -my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
                <form onSubmit={handleSubmit}>
                  <div className= "flex flex-col justify-start items-start px-2 py-4">
                    <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Project Type:</p>
                    <ProjectTypeDropdown
                      selectedOption = {projectType}
                      setSelectedOption = {setProjectType}/>
                    <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Carbon Credits:</p>
                    <Slider 
                      label="Carbon Credits"
                      min={500}
                      max={20000}
                      step={100}
                      unit="kgCO₂e"
                      posRight= {true}
                      decimal = {false}
                      value= {CarbonCredits}
                      setValue= {SetCarbonCredits}
                    />
                    <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Unit Price:</p>
                    <Slider 
                      label="Price"
                      min={3}
                      max={4}
                      step={0.10}
                      unit="RM"
                      posRight= {false}
                      decimal= {true}
                      value={unitPrice}
                      setValue={SetUnitPrice}
                    />
                    <button type="submit" className="w-60 text-lg bg-gray-100 py-3 text-gray-900 hover:text-blue-800 font-semibold rounded-lg shadow hover:bg-gray-200 mt-5 ml-28">Submit</button>
                  </div>
                </form>
              </div>
              <CountdownTimer/>
            </div>
        )
    }
}

export default EditBidCard;