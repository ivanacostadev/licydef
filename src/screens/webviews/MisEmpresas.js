import React, { useState } from "react";

import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WEBVIEWPREFERENCES} from '../../../env';


const MisEmpresas=({navigation,route})=>{


  const handleNavigation = (event) => {
    // Aquí puedes realizar el seguimiento de los enlaces navegados
    console.log(event.url);
  };


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

    const inicio=WEBVIEWPREFERENCES`?token_jwt=${token_jwt}&usuario_id=${usuario_id}`;
 

    return(
        <WebView
        source={{
          uri: inicio,
        }}
        onNavigationStateChange={handleNavigation}
        style={{marginTop: 0}}
      />
    )
}

export default MisEmpresas