import React, { useState, useEffect } from 'react';
import './CustomSlider.css'; // Import the CSS file for styling

const timeToMinutes = (hours, minutes) => hours * 60 + minutes;

const minutesToTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return { hours, mins };
};

const formatTime = ({ hours, mins }) => {
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Convert 0 to 12 for AM and 12 to 12 for PM
  const paddedMinutes = mins.toString().padStart(2, '0');
  return `${formattedHours}:${paddedMinutes} ${period}`;
};

const getCurrentMinutesFromStartTime = (startHours, startMinutes) => {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  return timeToMinutes(currentHours, currentMinutes) - timeToMinutes(startHours, startMinutes);
};

const CustomSlider = () => {
  const startTime = timeToMinutes(9, 15);
  const endTime = timeToMinutes(15, 30);
  const totalMinutes = endTime - startTime;

  const [sliderValue, setSliderValue] = useState(startTime);

  useEffect(() => {
    const currentMinutes = getCurrentMinutesFromStartTime(9, 15);
    if (currentMinutes >= 0 && currentMinutes <= totalMinutes) {
      setSliderValue(startTime + currentMinutes);
    }
  }, [startTime, totalMinutes]);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  const currentTime = formatTime(minutesToTime(sliderValue));

  return (
    <div className="slider-container">
      <input
        type="range"
        min={startTime}
        max={endTime}
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="slider-value">
        {currentTime}
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <div className="Slider">
      <p className='text-[25px]'>Choose the time if you want to</p>
      <CustomSlider />
    </div>
  );
};

export default Slider;
