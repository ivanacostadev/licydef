import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home/Home";
import NavigationStrings from "../components/NavigationStrings";
import Login from "../screens/Login/Login";
import { Gesturte } from "react-native-gesture-handler";
import CustomDrawer from "../components/CustomDrawer";

import HomeView from "../screens/webviews/Homeview";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const Routes = () => {

  const [tokenAuth, setTokenAuth] = useState("");
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [loged,setLoged]=useState("")



  const getDataFromStorage = async () => {
    try {
      const tokenAuthValue = await AsyncStorage.getItem("TokenAuth");
      const userValue = await AsyncStorage.getItem("user");
      const logeado = await AsyncStorage.getItem("logeado");

      if (tokenAuthValue !== null) {
        setTokenAuth(tokenAuthValue);
      }
      if (logeado !== null){
        setLoged(logeado)
        console.log(logeado)

      }

      if (userValue !== null) {
        setUser(userValue);
        setIsLoggedIn(true);
      
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log("Error reading data from AsyncStorage:", error);
    }
  };


   getDataFromStorage();




  return (
    <NavigationContainer>
   
    

       <Stack.Navigator 
            screenOptions={{
                headerShown:false,
                headerTitle:false,
                headerTitleAlign:"center",
                headerStyle: {
                    backgroundColor: '#000000',
                  },
                  headerTintColor: '#fff',
          
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },

                  

            }}>

              {MainStack(Stack)} 
                
            </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
