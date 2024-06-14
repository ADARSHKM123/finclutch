import React, { useEffect } from 'react';
import DatePick from '../Components/DatePick';
import Slider from '../Slider/Slider';
import './LandingOI.css';
import { FcBearish, FcBullish } from "react-icons/fc";
import { PiApproximateEqualsLight } from "react-icons/pi";
import { useSelector } from 'react-redux';
import Animation from '../img/Anim.gif';

function LandingOI({ OiData }) {
  useEffect(() => {
    console.log('$$$$$');
    console.log(OiData);
  }, [OiData]);

  return (
    <div className="mx-[60px] my-[40px]">
      <div className="h-[130px] w-full rounded-[10px] bg-gradient-to-r-custom flex items-center">
        <div className="p-[30px]">
          <h2 className="text-2xl">OPEN INTEREST</h2>
          <p className="pt-[5px] text-base">You can access total open interest values for anytime with ease and confidence</p>
        </div>
      </div> 
      <div className="px-[20px] py-[20px]">
        <p className="text-[25px] py-[30px]">Choose Date</p>
        <div className=''>
          <DatePick />
        </div>
        <div className='Slider-part'>
          <p className='text-[25px]'>Choose the time if you want to</p>
          <Slider/>
        </div>
        <div className='goBtn'>
          <div className='goBtnContent'>Go</div>
        </div>
        {OiData.length > 0 ? (
          <>
            <div className='MainDate'>
              <p>Date : <span>{OiData[0].date}</span></p>
              <p>Week : <span>{OiData[0].dayOfWeek}</span></p>
            </div>
            <div className='OiDetails-Wrapper'>
              <div className='OiDetails' >
              {OiData.map((data, index) => (
                  <div className='Index' key={index}>
                    <div className='IndexTitle'>{data.symbol}</div>    
                    <div className='Index_Details'>
                      <div className='Index_Details_left'>
                        <p>TOT CE OI : {data.tot_CE_OI}</p>
                        <p>TOT PE OI : {data.tot_PE_OI}</p>
                        <p>TOT OI DIFF : {data.differInLakhs}</p>
                      </div>
                      <div className='Index_Details_right'>
                        <p>PCR : {data.pcr}</p>
                        <p className='TREND'>
                          TREND : <span>
                            {data.trend === 'bullish' && <><FcBullish /> Bullish</>}
                            {data.trend === 'bearish' && <><FcBearish /> Bearish</>}
                            {data.trend === 'neutral' && <><PiApproximateEqualsLight /> Neutral</>}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
              ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center">
            <img src={Animation} alt="Loading..." />
          </div>
        )}
      </div>
    </div> 
  );
}

export default LandingOI;
