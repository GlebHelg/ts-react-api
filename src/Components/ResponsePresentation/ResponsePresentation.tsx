import React from 'react';
import "./ResponsePresentation.css";
import { IResponseData } from '../Interfaces/Interfaces';

interface IResponsePresentationProps {
  responseData: IResponseData
}

const ResponsePresentation = (props: IResponsePresentationProps) => {
  return (
    <div className="response-presentation">
      ResponseData
      {props.responseData.base_code}
    </div>
  );
}

export default ResponsePresentation;
