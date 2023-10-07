import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, Alert } from "react-native";
import Routes from "./src/navigation/Routes";
import "react-native-gesture-handler";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
//import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";


import {NavigationContainer} from '@react-navigation/native';

import LoginProvider from "./src/components/LoginProvider";
import MainNavigator from "./src/utils/MainNavigator";



const App = () => {
/*
  
  const requestUserPermission=async ()=>{
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      
      console.log('Authorization status:', authStatus);
    }

  }
  
  useEffect(() => {
    if(requestUserPermission()){
      messaging().getToken().then(async token =>{
        //Aqui se maneja el Token
        await AsyncStorage.setItem('Fb_Token',token)
      });

    }
    else{
      console.log("Fail token status",authStatus)
    }

    messaging()
    .getInitialNotification()
    .then(async(remoteMessage)=>{
      if(remoteMessage){
        console.log("Notification on",remoteMessage.notification,
        );
      }
    });

    messaging().onNotificationOpenedApp((remoteMessage)=>{
      console.log("Notificacion en backgorund",remoteMessage.notification,
      );
    });
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Mensaje manejado en background",remoteMessage)
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const { title, body } = remoteMessage.notification;
      Alert.alert(
        title,
        body
      );
    });
    
    return unsubscribe;

    
  
  }, [])

  */


  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>

  );
};

export default App;
