import React from 'react';

const DateSelector = () => {
  return (
    <div className="date-selector">
      <label htmlFor="start">Choose Date</label><br/>
      <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2022-05-31" />
    </div>
  );
}

export default DateSelector;
