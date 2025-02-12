import {useState} from 'react';
import ProjectTypes from "../Data/ProjectTypes.json";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

function ProjectTypeDropdown({selectedOption, setSelectedOption}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-start w-[465px]">
      <button
        type= "button"
        className="bg-[#FDFDFD] w-full hover:bg-gray-100 text-gray-800 border-1 border-gray-500 font-normal py-2 px-4 rounded-lg inline-flex items-center justify-between"
        onClick={toggleDropdown}
      >
        {selectedOption || 'Select an option'}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      
      {isOpen && (
        <ul className="absolute flex flex-col mt-11 w-full bg-gray-100 text-gray-800 pt-1 rounded-lg">
          {ProjectTypes.map((item, i)=>(
          <button type= "button" onClick={onOptionClicked(item.type)} key={i}>
            <div className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">{item.type}</div>
          </button>
          ))}
        </ul>
      )}
     
    </div>
  );
};

export default ProjectTypeDropdown;