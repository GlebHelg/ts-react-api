import React from 'react';

const APIKeySelector = () => {
  return (
    <div className="api-selector">
        <label htmlFor="api-key-input">Enter API Key</label><br />
        <input type="text" name="api-key-input" id="api-key-input" /><br />
    </div>
  );
}

export default APIKeySelector;
