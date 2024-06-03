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

const CustomSlider = () => {
  const startTime = timeToMinutes(9, 15);
  const endTime = timeToMinutes(15, 30);

  const [sliderValue, setSliderValue] = useState(timeToMinutes(new Date().getHours(), new Date().getMinutes()));

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderValue(timeToMinutes(new Date().getHours(), new Date().getMinutes()));
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, []);

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

export default CustomSlider;
