import React, { useState } from "react";

import NavigationStrings from "../components/NavigationStrings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
//import Signup from "../screens/Signup/Signup";
import { Image } from "react-native";
import imagePath from "../components/ImagePath";
import styles from "../Styles";
import HomeView from "../screens/webviews/Homeview";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  const [tokenAuth, setTokenAuth] = useState("");
  const [user, setUser] = useState("");

const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

const getDataFromStorage = async () => {
  try {
    const tokenAuthValue = await AsyncStorage.getItem("TokenAuth");
    const userValue = await AsyncStorage.getItem("user");
    const vigenciaValue = await AsyncStorage.getItem("vigencia");


    if (tokenAuthValue !== null) {
      setTokenAuth(tokenAuthValue);
    }

    if (userValue !== null) {
      setUser(userValue);
      setIsLoggedIn(true); 
    }


  } catch (error) {
    console.log("Error reading data from AsyncStorage:", error);
  }
};

getDataFromStorage()
console.log(isLoggedIn+"LOGGEDDD")

  




    return (
      <Stack.Navigator screenOptions={{ 
        headerShown: false,
        headerTitle:false,
        headerTitleAlign:"center",
        headerStyle: {
            backgroundColor: '#000000',
         
          },
          headerTintColor: '#0000',
  
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
        }}>
      

{isLoggedIn ? (
  <>
        <Stack.Screen name={NavigationStrings.HOME} component={Home} />
        <Stack.Screen name={NavigationStrings.HOMEVIEW} component={HomeView} />
        </>
      ) : (
        <>
          <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
       
        </>
      )}
      </Stack.Navigator>
    );
  }
  
 
  function TabRoutes() {
    return (
      <Tab.Navigator
        initialRouteName={NavigationStrings.HOMEVIEW}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "green",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "relative",
            backgroundColor: "#000000",
          },
        }}
      >
        <Tab.Screen
          name={NavigationStrings.HOMEVIEW}
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? "#fff" : "gray",
                  }}
                  source={imagePath.licyHome}
                />
              );
            },
          }}
   
        />
 
  
 
      </Tab.Navigator>
    );
  }
  
  export default TabRoutes;