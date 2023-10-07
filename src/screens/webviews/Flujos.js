import React, { useState } from "react";

import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Flujos=({navigation,route})=>{
  const [token_jwt, setTokenAuth] = useState('');
  const [usuario_id, setUser] = useState('');
  const [vigencia, setVigencia] = useState('');


  const getToken=async ()=>{
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if(status !== "granted"){
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
  
    setToken(token.data);

    

    
  }

  getToken()
  //const usuario_id = route.params.usuario_id

    const inicio=`https://lizzi.appsholos.com/dev/flujos?token_jwt=${token_jwt}&usuario_id=${usuario_id}`
 

    return(
        <WebView
        source={{
          uri: inicio,
        }}
        style={{marginTop: 0}}
      />
    )
}

export default Flujos