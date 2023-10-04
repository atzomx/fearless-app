import React from 'react';
import { createContext, FC, PropsWithChildren, useState } from 'react';

const initialForm = {
  name: '',
  description: '',
  files: [] as File[],
};

type FormNewDeal = typeof initialForm;

export const ContextNewDeal = createContext(
  {} as {
    data: FormNewDeal;
    setInfo: (newData: Pick<FormNewDeal, 'name' | 'description'>) => void;
    setFiles: (newData: Pick<FormNewDeal, 'files'>) => void;
  },
);

const NewDealContext: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState(initialForm);

  const setInfo = (newData: Pick<FormNewDeal, 'name' | 'description'>) => {
    setData(old => ({ ...old, ...newData }));
  };

  const setFiles = (newData: Pick<FormNewDeal, 'files'>) => {
    setData(old => ({ ...old, ...newData }));
  };

  return (
    <ContextNewDeal.Provider value={{ data, setInfo, setFiles }}>
      {children}
    </ContextNewDeal.Provider>
  );
};

export default NewDealContext;