import React from 'react';
import "./CurrencySelector.css";

const CurrencySelector = () => {
  return (
    <div className="currency-selector">
      <label htmlFor="currencies">Choose a currency</label>
      <select name="currencies" id="currencies">
        <option value="usd">US Dollar</option>
        <option value="nok">Norwegian krone</option>
        <option value="gbp">Pound sterling</option>
        <option value="sek">Svedish krone</option>
      </select>
    </div>
  );
}

export default CurrencySelector;
