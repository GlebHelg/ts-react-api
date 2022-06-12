import React from 'react';
import "./ResponsePresentation.css";
import axios from "axios";

const makeRequest = () => {
  axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
  .then( (response) => {
    response.data.pipe()
  });
}

const ResponsePresentation = () => {
  return (
    <div className="response-presentation">
      ResponsePresentation
    </div>
  );
}

export default ResponsePresentation;
