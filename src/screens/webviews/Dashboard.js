import React, { useState } from "react";

import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Dashboard=({navigation,route})=>{
  //const usuario_id = route.params.usuario_id

    const inicio=`https://lizzi.appsholos.com/dashboard`
 

    return(
        <WebView
        source={{
          uri: inicio,
        }}
        style={{marginTop: 0}}
      />
    )
}

export default Dashboard