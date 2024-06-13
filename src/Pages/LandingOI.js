import React from 'react';
import DatePick from '../Components/DatePick';
import Slider from '../Slider/Slider';
import './LandingOI.css'

function LandingOI() {
  return (
    <div className="mx-[60px] my-[40px]">
      <div className="h-[130px] w-full rounded-[10px] bg-gradient-to-r-custom flex items-center">
        <div className="p-[30px]">
          <h2 className="text-2xl">OPEN INTEREST</h2>
          <p className="pt-[5px] text-base">You can access total open interest values for anytime with ease and confidence</p>
        </div>
      </div> 
      <div className="px-[20px] py-[20px]">
        <p className="text-[25px] py-[30px]">
          Choose Date
        </p>
        <div className=''>
        <DatePick />
        </div>
        <div className='Slider-part'>
        <p className='text-[25px]'>Choose the time if you want to</p>
        <Slider/>
        </div>
        <div  className='goBtn'>
          <div className='goBtnContent'>Go</div>
        </div>
        <div className='OiDetails'>
          <div className='Nifty'>
          <div className='IndexTitle'>NIFTY</div>    
          <div className='Index_Details'>
            
              <div className='Index_Details_left'>
                <p>TOT CE OI   : 234567</p>
                <p>TOT PE OI   : 234567</p>
                <p>TOT OI DIFF   : 234567</p>
              </div>
              <div className='Index_Details_right'>
                <p>PCR  :  2</p>
                <p>TREND  :<span> BULLISH</span></p>
              </div>
            </div>
          </div>
          <div className='Bnf'>
          <div className='IndexTitle'>BANK NIFTY</div>    
          <div className='Index_Details'>
            
              <div className='Index_Details_left'>
                <p>TOT CE OI   : 234567</p>
                <p>TOT PE OI   : 234567</p>
                <p>TOT OI DIFF   : 234567</p>
              </div>
              <div className='Index_Details_right'>
                <p>PCR  :  2</p>
                <p>TREND  :<span> BULLISH</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default LandingOI;
