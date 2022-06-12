import React, { useEffect, useState } from 'react';
import "./MainLayout.css";
import ResponsePresentation from '../ResponsePresentation/ResponsePresentation';
import QueryForm from '../QueryForm/QueryForm';
import { IResponseData } from '../Interfaces/Interfaces';


const MainLayout = () => {

  let [responseData, setResponseData] = useState<IResponseData>({} as IResponseData);

  console.log('state responseData: ', responseData);

  return (
    <div className="main-grid">
      <div className="heading">
        <h3>Currency Exchange Rates</h3>
        <p>https://v6.exchangerate-api.com/v6/</p>
      </div>
      <div className="query-selector-wrapper">
        <QueryForm setResponseData={setResponseData}/>
      </div>
      <div className="response-presentation-wrapper">
        <ResponsePresentation responseData={responseData}/>
      </div>
    </div>
  );
}

export default MainLayout;
