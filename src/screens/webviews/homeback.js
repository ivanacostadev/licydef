import React, { useRef, useState } from 'react';

import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";


import {BASE_URI} from "../../../env"
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const HomeView=({navigation,route})=>{
  const [token_jwt, setTokenAuth] = useState('');
  const [usuario_id, setUser] = useState('');
  const [vigencia, setVigencia] = useState('');

  const webViewRef = useRef(null);
  const [visitedUrls, setVisitedUrls] = useState([]);




  
 // const [inicio,setInicio]=useState("")

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

  const handleNavigation = (event) => {
    const url = event.url;
    
    // Comprobar si la URL ya ha sido visitada
    if (!visitedUrls.includes(url)) {
      // Agregar la URL a la lista de URLs visitadas
      setVisitedUrls([...visitedUrls, url]);
    }
  };




 
  const CursorUrl = "HOME";
  let strsub;
  
  if (CursorUrl === "HOME") {
    strsub = `licitaciones?usuario_id=${usuario_id}`;
  } 
  else if (CursorUrl === "PREF") {
    strsub = `preferencias?usuario_id=${usuario_id}`;
  } else {
    strsub = `licitaciones?usuario_id=${usuario_id}`;
  }

//Datos de config URL
//BASE

const URIDEF = BASE_URI + strsub;
const inicio = URIDEF;

//console.log(inicio+"URL") ;

const VisitedUrlComponent = ({ url }) => {
  return (
    <View>
      <Text>URL visitada: {url}</Text>
      
    </View>
  );
};


    return(
      <>
        <WebView
          ref={webViewRef}
        source={{
          uri: inicio,
        }}
        onNavigationStateChange={handleNavigation}
        style={{marginTop: 0}}
      />

{visitedUrls.map((url, index) => (
        <VisitedUrlComponent  url={url} />
      ))}

      </>
    )
}



export default HomeView