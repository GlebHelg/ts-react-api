import React from 'react';
import APIKeySelector from './APIKeySelector/APIKeySelector';
import CurrencySelector from './CurrencySelector/CurrencySelector';
import DateSelector from './DateSelector/DateSelector';
import './QueryForm.css';

const collectFormValues = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const formProps = Object.keys(e.target)
                            .slice(0, (e.target as any).length)
                            .map(idx => (e.target as any)[idx]);

    const formObjects = formProps.map(x => { return {'id': x.id, 'val': x.value}; })
                                 .slice(0, formProps.length-1);

    return formObjects;
}

const getData = (e: React.FormEvent<HTMLFormElement>, setStateRef: React.Dispatch<React.SetStateAction<IRequestData>>) => {
  e.preventDefault();
  const formValues = collectFormValues(e);

  console.log('addFormElementsToParentState: ', formValues);
  setStateRef({
    apiKey: formValues[0].val,
    currency: formValues[1].val,
    date: formValues[2].val
  });

}

interface IRequestData {
  apiKey: string,
  currency: string,
  date: string
}

interface IQueryFormProps {
  setResponseData: React.Dispatch<React.SetStateAction<IRequestData>>
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