import React from 'react';
import "./ResponsePresentation.css";
import { IConversionRates, IResponseData } from '../Interfaces/Interfaces';

interface IResponsePresentationProps {
  responseData: IResponseData
}

const getConversionRatesJsx = (conversion_rates: IConversionRates) => {
  const entries = Object.entries(conversion_rates);
  const entriesJsx = entries.map(entry => {
    return (<tr key={entry[0]}>
      <td>{entry[0]}</td>
      <td>{entry[1]}</td>
    </tr>);
  });

  console.log('entriesJsx: ', entriesJsx);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {entriesJsx}
      </tbody>
    </table>
  );

}

const ResponsePresentation = (props: IResponsePresentationProps) => {

  return (
    <div className="response-presentation">
      <div className="response-heading-wrapper">
        <h4>Response Data</h4>
        <h5>{props.responseData.base_code}</h5>
      </div>
      <div className="response-table-wrapper">
        {props.responseData.conversion_rates ? getConversionRatesJsx(props.responseData.conversion_rates) : <p>No Data</p>}
      </div>
    </div>
  );
}

export default ResponsePresentation;
