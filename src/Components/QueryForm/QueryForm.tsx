import React from 'react';
import APIKeySelector from './APIKeySelector/APIKeySelector';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import DateSelector from './DateSelector/DateSelector';
import './QueryForm.css';
import { IResponseData } from '../Interfaces/Interfaces';
import axios from 'axios';
import { API_KEY } from '../../apiKey';

const collectFormValues = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const formProps = Object.keys(e.target)
                            .slice(0, (e.target as any).length)
                            .map(idx => (e.target as any)[idx]);

    const formObjects = formProps.map(x => { return {'id': x.id, 'val': x.value}; })
                                 .slice(0, formProps.length-1);

    return formObjects;
}

const makeApiCall = (apiKey: string, currency: string, year: string, month: string, day: string, setStateRef: React.Dispatch<React.SetStateAction<IResponseData>>) => {
  //const requestString = `https://v6.exchangerate-api.com/v6/${apiKey}/history/${currency}/${year}/${month}/${day}`; //requires plan upgrade
  const requestString = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}/`;
  axios.get(requestString)
      .then(resp => {
        const respData: IResponseData = resp.data as IResponseData;
        console.log('respData: ', respData);
        setStateRef(respData);
      });
}

const getData = (e: React.FormEvent<HTMLFormElement>, setStateRef: React.Dispatch<React.SetStateAction<IResponseData>>) => {
  e.preventDefault();
  const formValues = collectFormValues(e);

  console.log('formElements: ', formValues);

  const apiKey = formValues[0].val;
  const currency = formValues[1].val;
  const year  = '';//formValues[2].val.split('-')[0];
  const month = '';//formValues[2].val.split('-')[1];
  const day   = '';//formValues[2].val.split('-')[2];

  makeApiCall(apiKey,	currency,	year,	month, day, setStateRef);

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
          <div className='submit-btn-wrapper'>
            <button type="submit">Get Data</button>
          </div>
        </div>
      </form>
  );
}

export default QueryForm;