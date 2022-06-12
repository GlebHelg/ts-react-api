import React from 'react';

const CurrencySelector = () => {
  return (
    <div className="currency-selector">
      <label htmlFor="currencies">Choose currency</label><br/>
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
