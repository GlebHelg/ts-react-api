import React from 'react';
import "./ApiConnector.css";

const ApiConnector = () => {
  return (
    <div className="api-connector">
      <b>Enter key below to </b>
      <p>GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/YOUR-CURRENCY</p>
      <form>
        <label htmlFor="api-key-input">Enter API Key</label>
        <input type="text" name="api-key-input" id="api-key-input" />
        <button type="submit">Use key for query</button>
      </form>
    </div>
  );
}

export default ApiConnector;
