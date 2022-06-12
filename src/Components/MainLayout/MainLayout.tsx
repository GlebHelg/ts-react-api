import React, { useEffect, useState } from 'react';
import "./MainLayout.css";
import ResponsePresentation from '../ResponsePresentation/ResponsePresentation';
import QueryForm from '../QueryForm/QueryForm';
import { IResponseData } from '../Interfaces/Interfaces';


const MainLayout = () => {

  let [responseData, setResponseData] = useState<IResponseData>({
                                                  apiKey: '',
                                                  currency: '',
                                                  date: ''
                                                });

  console.log('requestData: ', setResponseData);

  return (
    <div className="main-grid">
      <div className="heading">
      heading
      </div>
      <div className="query-selector-wrapper">
        <QueryForm setResponseData={setResponseData}/>
      </div>
      <div className="response-presentation-wrapper">
        <ResponsePresentation />
      </div>
    </div>
  );
}

export default MainLayout;
