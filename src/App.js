// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setOiData } from './redux/oiSlice';
import LandingOI from './Pages/LandingOI';

function App() {
  const dispatch = useDispatch();
  const OiData = useSelector((state) => state.oi);

  useEffect(() => {
    const OiDetails = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/v1/user/oi',
          { withCredentials: true }
        );
        if (response) {
          console.log('FROM APP.JS');
          console.log(response.data.data);
          dispatch(setOiData(response.data.data));
          console.log('dispatched...........');
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
 
    OiDetails();
    const intervalId = setInterval(OiDetails, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className='app'>
      <LandingOI OiData={OiData} />
    </div>
  );
}

export default App;
