import React, { useState } from "react";

export default function Slider({ label, min, max, step, unit, posRight, decimal, value, setValue}) {
  let defaultValue, minValue, maxValue;
  if (decimal) {
    defaultValue = parseFloat(value).toFixed(2);
    minValue = parseFloat(min).toFixed(2);
    maxValue = parseFloat(max).toFixed(2);
  } else {
    defaultValue = value;
    minValue = min;
    maxValue = max;
  }

  // const [value, setValue] = useState(defaultValue);
  const [inputvalue, setInputValue] = useState(defaultValue);

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    let newVal;
    if (decimal) {
      newVal = newValue.toFixed(2);
      setInputValue(newVal);
      newVal = parseFloat(newVal);
    }
    else {
      newVal = newValue.toFixed(0);
      setInputValue(newVal);
      newVal = parseInt(newVal);
    }
    // setValue(newValue);
    setValue(newVal);
  };

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);
    let newVal;
    if (decimal) {
      newVal = newValue.toFixed(2);
      setInputValue(newVal);
      newVal = parseFloat(newVal);
    }
    else {
      newVal = newValue.toFixed(0);
      setInputValue(newVal);
      newVal = parseInt(newVal);
    }

    if (newValue >= min && newValue <= max) {
      setValue(newVal);
      // setInputValue(newVal);
    }
    else if (newValue < min) {
      setValue(minValue);
      setInputValue(minValue);
    }
    else if (newValue > max) {
      setValue(maxValue);
      setInputValue(maxValue);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-between mt-1 w-[465px]">
      <div className="flex items-center gap-10 ml-4">
        {posRight? <span className="text-lg text-white">{unit}</span> : <span className="text-lg text-gray-800">{unit}</span>}
        <input
          type="number"
          id={`${label}-input`}
          className="border border-gray-500 rounded-md px-2 py-1 text-center w-24"
          value={inputvalue}
          min={min}
          max={max}
          step={step}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputChange}
        />
        {posRight? <span className="text-lg text-gray-800">{unit}</span> : <span className="text-lg text-white">{unit}</span>}
      </div>
      <input
        type="range"
        id={`${label}-slider`}
        className="mt-4 w-96" //inlude accent to change color of slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
      />
      <div className="flex justify-between w-[420px] mt-1 font-gray-600 font-normal">
        {decimal? <span>{min.toFixed(2)}</span> : <span>{min.toFixed(0)}</span>}
        {decimal? <span>{max.toFixed(2)}</span> : <span>{max.toFixed(0)}</span>}
        </div>
    </div>
  );
}
