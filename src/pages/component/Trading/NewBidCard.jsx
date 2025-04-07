// npx json-server --watch src/pages/component/Data/BidsMade.json --port 8000
import {useEffect, useState} from "react";
import ProjectTypeDropdown from "./Dropdowns";
import Slider from "./SliderBar";
import BidsMadeCard from "./BidsMadeCard";
import {useNavigate} from 'react-router-dom';
import CountdownTimer from "./CountdownTimer";

const NewBidCard = () => {
  const [NewBid, SetNewBid] = useState(1);
  const [ProjectName, SetProjectName] = useState('');
  const [projectType, setProjectType] = useState(null);
  const [CarbonCredits, SetCarbonCredits] = useState(500);
  const [unitPrice, SetUnitPrice] = useState(0.10);
  const [BidsMade, SetBidsMade] = useState(null);
  const [bidType, SetBidType] = useState("Selling");
  const navigate = useNavigate();

  const sellingButton = () => {
    SetNewBid(2);
    SetBidType("Selling");
  }

  const buyingButton = () => {
    SetNewBid(3);
    SetUnitPrice(3.00);
    SetBidType("Bidding");
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newBid = {ProjectName, projectType, bidType, CarbonCredits, unitPrice};
    fetch('http://localhost:8000/bids',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newBid)
    }).then(() => {
      console.log('New Bid Added');
      navigate('/trading');
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/bids')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        SetBidsMade(data);
      })
  },[]);

  if (NewBid === 1) {
    return (
      <div>
        <div className= "items-start mx-6 rounded-2xl bg-white px-6 py-6 w-550 h-[300px] shadow-lg ring-1 ring-slate-900/5">
          <h2 className="ml-3 text-xl font-bold max-sm:text-lg mb-4">New Bidding</h2>
          <hr className="h-px -my-2 bg-gray-200 border-1 dark:bg-gray-700"></hr>
          <div className= "flex flex-col justify-center items-center mt-14">
            <button className="w-60 text-lg mb-5 bg-gray-100 py-3 text-gray-900 hover:text-blue-800 font-semibold rounded-lg shadow hover:bg-gray-200" onClick={()=> sellingButton()} >Selling</button> 
            <button className="w-60 text-lg bg-gray-100 py-3 text-gray-900 hover:text-blue-800 font-semibold rounded-lg shadow hover:bg-gray-200" onClick={()=> buyingButton()}>Buying</button> 
          </div>
        </div>
        <CountdownTimer/>
        <div className= "overflow-y-auto items-start mx-6 rounded-xl px-4 py-2 bg-white w-550 h-36 shadow-xl ring-1 ring-slate-900/5">
          <h4 className="ml-3 mt-1 text-[17px] font-semibold">Bids made today</h4>
          <hr className="h-px px-2 my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {BidsMade && <BidsMadeCard bids={BidsMade}/>}
        </div>
      </div>
    );
  }
  else if (NewBid === 2) {
    return (
      <div>
        <div className= "overflow-y-auto justify-start items-start mx-6 rounded-3xl bg-white px-6 py-6 w-550 h-[464px] shadow-lg ring-1 ring-slate-900/5">
          <h2 className="ml-3 text-xl font-bold max-sm:text-lg mb-4">New Bidding</h2>
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
              <div className="flex flex-row justify-between items-center w-full">
                <p className="text-gray-700 text-sm font-normal mt-3 mb-2">Unit Price:</p>
                <p className="text-blue-800 text-sm font-semibold underline mt-3 mb-2">Total: RM{unitPrice*CarbonCredits}</p>
              </div>
              
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
      </div>  
    );
  }
  else if (NewBid === 3) {
    return (
      // SetUnitPrice(3.00),
      <div>
        <div className= "overflow-y-auto justify-start items-start mx-6 rounded-3xl bg-white px-6 py-6 w-550 h-[464px] shadow-lg ring-1 ring-slate-900/5">
          <h2 className="ml-3 text-xl font-bold max-sm:text-lg mb-4">New Bidding</h2>
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
};

export default NewBidCard;