import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoutes from './tab.routes';

import colors from '../styles/colors';

import Welcome from '../pages/Welcome';
import Confirmation from '../pages/Confirmation';
import UserIdentification from '../pages/UserIdentification';
import PlantSave from '../pages/PlantSave';

const stackRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
      <stackRoutes.Screen name="PlantSave" component={PlantSave} />
      <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
