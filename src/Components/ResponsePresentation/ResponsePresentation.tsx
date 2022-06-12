import React from 'react';
import "./ResponsePresentation.css";
import { IResponseData } from '../Interfaces/Interfaces';




interface IResponsePresentationProps {
  responseData: IResponseData
}

const ResponsePresentation = (props: IResponsePresentationProps) => {
  return (
    <div className="response-presentation">
      <h4>ResponseData</h4>
      {props.responseData.base_code}
    </div>
  );
}

export default ResponsePresentation;
