import React from 'react';
import { createContext, FC, PropsWithChildren, useState } from 'react';

import { File } from '@core/interfaces/IFile';

const initialForm = {
  name: '',
  description: '',
  amount: '',
  files: [] as File[],
};

type FormNewDeal = typeof initialForm;

export const ContextNewDeal = createContext(
  {} as {
    data: FormNewDeal;
    setInfo: (newData: Pick<FormNewDeal, 'name' | 'description'>) => void;
    setFiles: (newData: Pick<FormNewDeal, 'files'>) => void;
    setAmount: (newData: Pick<FormNewDeal, 'amount'>) => void;
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

  const setAmount = (newData: Pick<FormNewDeal, 'amount'>) => {
    setData(old => ({ ...old, ...newData }));
  };

  return (
    <ContextNewDeal.Provider value={{ data, setInfo, setFiles, setAmount }}>
      {children}
    </ContextNewDeal.Provider>
  );
};

export default NewDealContext;
