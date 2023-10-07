import React, { useState } from "react";

import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MiCuenta=({navigation,route})=>{
  const [token_jwt, setTokenAuth] = useState('');
  const [usuario_id, setUser] = useState('');
  const [vigencia, setVigencia] = useState('');
  
  //const usuario_id = route.params.usuario_id
  const getDataFromStorage = async () => {
    try {
      const tokenAuthValue = await AsyncStorage.getItem('TokenAuth');
      const userValue = await AsyncStorage.getItem('user');
      const vigenciaValue = await AsyncStorage.getItem('vigencia');

      if (tokenAuthValue !== null) {
        setTokenAuth(tokenAuthValue);
      }

      if (userValue !== null) {
        setUser(userValue);
       
      }

      if (vigenciaValue !== null) {
        setVigencia(vigenciaValue);
    
      
      }
    } catch (error) {
      console.log('Error reading data from AsyncStorage:', error);
    }
  };

  getDataFromStorage();
  console.log(usuario_id)
  console.log(token_jwt)

    const inicio=`https://lizzi.appsholos.com/dev/micuenta?token_jwt=${token_jwt}&usuario_id=${usuario_id}`
 

    return(
        <WebView
        source={{
          uri: inicio,
        }}
        style={{marginTop: 0}}
      />
    )
}

export default MiCuenta