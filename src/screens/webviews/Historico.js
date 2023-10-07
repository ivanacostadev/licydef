import React, { useState } from "react";

import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Historico=({navigation,route})=>{

  const [token_jwt, setTokenAuth] = useState('');
  const [usuario_id, setUser] = useState('');
  const [vigencia, setVigencia] = useState('');
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

    const inicio=`https://lizzi.appsholos.com/dev/historico?token_jwt=${token_jwt}&usuario_id=${usuario_id}`
 

    return(
        <WebView
        source={{
          uri: inicio,
        }}
        style={{marginTop: 0}}
      />
    )
}

export default Historico