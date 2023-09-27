import { useContext } from 'react';

import { ContextNewDeal } from '@e/deals/context';

const useNewDeal = () => {
  const context = useContext(ContextNewDeal);
  if (!context)
    throw new Error(
      'useNewDeal should be implemented with under NewDealContext',
    );
  return context;
};

export default useNewDeal;
