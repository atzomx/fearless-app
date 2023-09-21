import { useContext } from 'react';

import { WizardContext } from '@core/ui/Wizard';

const useWizard = () => {
  const context = useContext(WizardContext);
  if (!context)
    throw new Error('useWizard should be implemented with undeer Wizard');
  return context;
};

export default useWizard;
