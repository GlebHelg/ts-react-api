import React from 'react';
import APIKeySelector from './APIKeySelector/APIKeySelector';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import DateSelector from './DateSelector/DateSelector';
import './QueryForm.css';
import { IResponseData } from '../Interfaces/Interfaces';
import axios from 'axios';

const collectFormValues = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const formProps = Object.keys(e.target)
                            .slice(0, (e.target as any).length)
                            .map(idx => (e.target as any)[idx]);

    const formObjects = formProps.map(x => { return {'id': x.id, 'val': x.value}; })
                                 .slice(0, formProps.length-1);

    return formObjects;
}

const makeApiCall = (apiKey: string, currency: string, year: string, month: string, day: string) => {
  const requestString = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/history/USD/YEAR/MONTH/DAY";
  axios.get(requestString)
      .then(resp => console.log(resp));
}

const getData = (e: React.FormEvent<HTMLFormElement>, setStateRef: React.Dispatch<React.SetStateAction<IResponseData>>) => {
  e.preventDefault();
  const formValues = collectFormValues(e);

  console.log('formElements: ', formValues);

  const apiKey = "";
  const currency = "";
  const year = ""
  const month = "";
  const day = "";

  makeApiCall(apiKey,	currency,	year,	month, day);

  // setStateRef({
  //   apiKey: formValues[0].val,
  //   currency: formValues[1].val,
  //   date: formValues[2].val
  // });

}

interface IQueryFormProps {
  setResponseData: React.Dispatch<React.SetStateAction<IResponseData>>
}

const QueryForm = (props: IQueryFormProps) => {
  return (
      <form onSubmit={(e) => getData(e, props.setResponseData)}>
        <div className="query-form">
          <APIKeySelector />
          <CurrencySelector />
          <DateSelector />
          <div className='submit-btn-wrapper'>
            <button type="submit">Get Data</button>
          </div>
        </div>
      </form>
  );
}

export default QueryForm;