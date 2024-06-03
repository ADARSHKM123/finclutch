
import './DatePicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="DatePick">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}

export default DatePick;
