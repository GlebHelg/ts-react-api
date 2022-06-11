import React from 'react';
import "./ApiConnector.css";

const ApiConnector = () => {
  return (
    <div className="api-connector">
      <p>Enter key below to query www. for data</p>
      <form>
        <label htmlFor="api-key-input">Enter API Key</label>
        <input type="text" name="api-key-input" id="api-key-input" />
        <button type="submit">Use key for query</button>
      </form>
    </div>
  );
}

export default ApiConnector;
