import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useNavigate } from '@core/hooks';
import { NewDealScreen } from '@e/deals/screens';

const DealStack = createStackNavigator();

const DealRouter = () => {
  useNavigate({
    options: {
      tabBarStyle: { display: 'none' },
      presentation: 'modal',
    },
  });

  return (
    <DealStack.Navigator
      screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <DealStack.Screen name="NewDeal" component={NewDealScreen} />
    </DealStack.Navigator>
  );
};

export default DealRouter;
