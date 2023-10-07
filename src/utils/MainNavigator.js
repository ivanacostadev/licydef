import React, { useContext } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useLogin } from '../components/LoginProvider';
import Login from '../screens/Login/Login';
import DrawerNavigator from './DrawerNavigator';
import NavigationStrings from '../components/NavigationStrings';
import WebViewScreen from '../screens/webviews/WebViewScreen';
const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
           <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
   

  </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
