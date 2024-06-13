import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import LandingOI from './Pages/LandingOI';

function App() {
  const [OiData, setOiData] = useState([]);

  // useEffect(() => {
  //   const OiDetails = async () => {
  //     alert('calling');
  //     try {
  //       const response = await axios.get(
  //         'http://localhost:5000/api/v1/user/oi',
  //         { withCredentials: true }
  //       );
  //       if (response) {
  //         console.log('FROM APP.JS');
  //         console.log(response.data.data);
  //         setOiData(response.data.data); 
  //         console.log('dispatched...........');
  //       }
  //     } catch (error) {
  //       console.log(error.response.data.message);
  //     }
  //   };

  //   OiDetails();
  //   const intervalId = setInterval(OiDetails, 1 * 60 * 1000); 

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className='app'>
      <LandingOI OiData={OiData} />
    </div>
  );
}

export default App;
