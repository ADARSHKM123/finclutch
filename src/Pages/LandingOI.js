import React from 'react';
import DatePick from '../Components/DatePick';

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
      </div>
    </div> 
  );
}

export default LandingOI;
