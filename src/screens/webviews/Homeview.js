import React, { useEffect, useState,useRef } from "react";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation,DrawerActions } from "@react-navigation/native";
import { BASE_URI } from "../../../env";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Button
} from "react-native";


const HomeView = ({ navigation, route }) => {



  const openDrawer = () => {
 navigation.dispatch(DrawerActions.openDrawer())
  };

  //BACK BUTTOM 
  const handleBackPress = () => {
    openDrawer()
    return true; // Prevent default back button behavior
  };


 

  useEffect(() => {
    // Subscribe to the back press event when the component is focused
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  
    // Unsubscribe from the back press event when the component is unfocused
    return () => backHandler.remove();
  }, []);



  const [token_jwt, setTokenAuth] = useState("");
  const [usuario_id, setUser] = useState("");






  const webViewRef = useRef(null);



  

  const getDataFromStorage = async () => {
    try {
      const tokenAuthValue = await AsyncStorage.getItem("JWT_Token");
      const userValue = await AsyncStorage.getItem("user");

      if (tokenAuthValue !== null) {
        setTokenAuth(tokenAuthValue);
        //console.log(token_jwt+"JWT")
      }

      if (userValue !== null) {
        setUser(userValue);
      }

   
    } catch (error) {
      console.log("Error reading data from AsyncStorage:", error);
    }
  };

  getDataFromStorage();
  console.log();

 

  const labelview = route.params?.LabelView ?? "HOME";

  

  const ConcatUser = `usuario_id=${usuario_id}`;
  const ConcatJWT = `token_jwt=${token_jwt}&`;

  let strsub;
  switch (labelview) {
    case "":
      strsub = `preferencias?` + ConcatJWT + ConcatUser;
      break;
    case "HOME":
      strsub = `preferencias?` + ConcatJWT + ConcatUser;
      break;
    case "FLUJOSANEXOS":
      strsub = `asignaciones?` + ConcatJWT + ConcatUser;
      break;
    case "FLUJOS":
      strsub = `flujos?` + ConcatJWT + ConcatUser;
      break;
    case "NUEVASLICITACIONES":
      strsub = `licitaciones?` + ConcatJWT + ConcatUser;
      break;
    case "MISLICITACIONES":
      strsub = `mislicitaciones?` + ConcatJWT + ConcatUser;
      break;
    case "FAVORITOS":
      strsub = `misintereses?` + ConcatJWT + ConcatUser;
      break;
    case "HISTORICO":
      strsub = `historico?` + ConcatJWT + ConcatUser;
      break;
    case "PAGOS":
      strsub = `pagos?` + ConcatJWT + ConcatUser;
      break;
    case "PREFERENCIAS":
      strsub = `preferencias?` + ConcatJWT + ConcatUser;
      break;
    case "MISEMPRESAS":
      strsub = `empresas?` + ConcatJWT + ConcatUser;
      break;
    case "COLABORADORES":
      strsub = `miscolaboradores?` + ConcatJWT + ConcatUser;
      break;
    case "MICUENTA":
      strsub = `micuenta?` + ConcatJWT + ConcatUser;
      break;
    case "QUIENES":
      strsub = `quienes?` + ConcatJWT + ConcatUser;
      break;
    case "CONTACTANOS":
      strsub = `contactanos?` + ConcatJWT + ConcatUser;
      break;
    case "AVISO":
      strsub = `aviso?` + ConcatJWT + ConcatUser;
      break;
    case "TERMINOS":
      strsub = `terminos?` + ConcatJWT + ConcatUser;
      break;
    default:
      strsub = `preferencias?` + ConcatJWT + ConcatUser;
    
      break;
  }

  //Datos de config URL
  //BASE

  const URIDEF = BASE_URI + strsub;
  const inicio = URIDEF;
  console.log(inicio);

  /*
  const VisitedUrlComponent = ({ url }) => {
    return (
      <View>
        <Text>URL visitadas:{inicio}</Text>
      </View>
    );
  };
*/

  return (
    <>

      <WebView
        ref={webViewRef}
        source={{
          uri: inicio,
        }}
        style={{ marginTop: 0 }}
      />
    </>
  );
};

export default HomeView;
