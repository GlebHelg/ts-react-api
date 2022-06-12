import React from 'react';
import "./ResponsePresentation.css";
import { IConversionRates, IResponseData } from '../Interfaces/Interfaces';


const simpleObjectToArray = (conversion_rates: IConversionRates) => {
  const propertyNames = Object.keys(conversion_rates);
  const propertyValues = Object.values(conversion_rates);
}

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

  // console.log(props);
  
  // let conversionRatesJsx: JSX.Element = {} as JSX.Element;
  // if(props.responseData.conversion_rates){
  //   getConversionRatesJsx(props.responseData.conversion_rates);
  // }

  return (
    <div className="response-presentation">
      <h4>ResponseData</h4>
      <h5>{props.responseData.base_code}</h5>
      <div className="response-table-wrapper">
        {props.responseData.conversion_rates ? getConversionRatesJsx(props.responseData.conversion_rates) : <p>No Data</p>}
      </div>
    </div>
  );
}

export default ResponsePresentation;
