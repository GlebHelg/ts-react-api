import React from 'react';
import "./MainLayout.css";
import ApiConnector from '../APIConnector/ApiConnector';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import DateSelector from '../DateSelector/DateSelector';
import ResponsePresentation from '../ResponsePresentation/ResponsePresentation';

const MainLayout = () => {
  return (
    <div className="main-grid">
      <div className="heading">
      heading
      </div>
      <div className="api-connector-wrapper">
        <ApiConnector />
      </div>
      <div className="currency-selector-wrapper">
        <CurrencySelector />
      </div>
      <div className="date-selector-wrapper">
        <DateSelector />
      </div>
      <div className="response-presentation-wrapper">
        <ResponsePresentation />
      </div>
    </div>
  );
}

export default MainLayout;
