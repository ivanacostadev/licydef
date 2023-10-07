import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Styles";

import ImagePath from "../../components/ImagePath";
import axios from "axios";
import NavigationStrings from "../../components/NavigationStrings";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

//import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_ENDPOINT } from "../../../env";

import { useLogin } from "../../components/LoginProvider";
import WebViewScreen from "../webviews/WebViewScreen";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

//INICIA COMPONENTE
export const Login = ({ navigation }) => {
  const { setIsLoggedIn } = useLogin();

  //FIREBASE TOKEN CONFIG
  const [FB_Token,setFB_Token]=useState("")



  const goToHomeView = () => {
    navigation.navigate(NavigationStrings.HOMEVIEW, { LabelView: "HOME" });
  };

  const sysop = Device.osName;

  const getDataFromStorage = async () => {
    try {
      const Fb_Token = await AsyncStorage.getItem("Fb_Token");

      if (Fb_Token !== null) {
        setFB_Token(Fb_Token);
      }
    } catch (error) {
      console.log("Error reading data from AsyncStorage:", error);
    }
  };

 // getDataFromStorage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [seePassword, setSeePassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(false);

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };
  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    const isValidLength = /^.{6,16}$/;
  
    const validity = {
      hasNonWhiteSpace: isNonWhiteSpace.test(value),
      hasValidLength: isValidLength.test(value),
    };
  
    return validity;
  };

  const handleSubmit = async () => {
    const passwordValidity = checkPasswordValidity(password);

    if (!passwordValidity.hasNonWhiteSpace) {
      alert("No puede haber espacios en blanco en su contraseña");
      return;
    }
  
    if (!passwordValidity.hasValidLength) {
      alert("La contraseña debe tener mínimo 6 caracteres y máximo 16 caracteres");
      return;
    }


      try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        //formData.append('token', FB_Token);
        formData.append("device", sysop);

        const response = await axios.post(API_ENDPOINT, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const estatus = response.data["estatus"];
        const resp = response.data;
        const usertemp = resp.data["usuario_id"];
        const apPat = resp.data["usuario_ap_paterno"];
        const apMat = resp.data["usuario_ap_materno"];
        const nombre = resp.data["usuario_nombre"];
        const vigente = resp.data["dias_vigencia"];
        const JWT_Token = response.data["token"];


        await AsyncStorage.setItem("JWT_Token", JWT_Token);
        await AsyncStorage.setItem("user", usertemp);
        await AsyncStorage.setItem("vigencia", vigente);
        await AsyncStorage.setItem("nombre", nombre);
        await AsyncStorage.setItem("appat", apPat);
        await AsyncStorage.setItem("apmat", apMat);

        //console.log(JWT_Token + "TOKEN JWT");
        //console.log(FB_Token+"TOKEN DE FIREBASE")

        if (estatus == 1) {
          setIsLoggedIn(true);
          //console.log(apMat);
        }
   
      } catch (error) {
        // Handle the error
        console.error(error);
        //alert("Usuario o contraseña no encontrados");

    // Show alert for error 400
    if (error.response && error.response.status === 400) {
      alert("Usuario o contraseña no encontrados");
    } else {
      // Show alert for other errors
      alert("Ha ocurrido un error en el servidor. Por favor, inténtelo de nuevo más tarde.");
    }
      }
    
 
  };

  const gotoaviso = () => {
    navigation.navigate("WebViewScreen", {
      url: "https://lizzi.appsholos.com/dev/aviso",
      title: "AVISO DE PRIVACIDAD",
    });
  };

  const gototerminos = () => {
    navigation.navigate("WebViewScreen", {
      url: "https://lizzi.appsholos.com/dev/terminos",
      title: "TERMINOS Y CONDICIONES",
    });
  };

  return (
    <LinearGradient
      colors={["#000000", "#000000"]}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.containerLogin}>
          <Image
            style={styles.imgintro}
            source={require("../../../assets/img/lizzilogo.png")}
          />
          <Image
            style={styles.imgintro}
            source={require("../../../assets/img/logo.png")}
          />

          <Text style={styles.txtlog}>Iniciar sesi&oacute;n</Text>
          <View>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="EMAIL"
              placeholderTextColor="#FFF"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="CONTRASEÑA"
              placeholderTextColor="#FFF"
              autoCapitalize="none"
              value={password}
              secureTextEntry={seePassword}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}
            >
              <Image
                source={seePassword ? ImagePath.icEyeOff : ImagePath.icEye}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {email == "" || password == "" ? (
            <Text style={styles.txtlogsubmit}></Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.txtlogsubmit}>Iniciar Sesi&oacute;n</Text>
            </TouchableOpacity>
          )}

          <View style={styles.viewhomes}>
            <TouchableOpacity style={styles.addshome} onPress={gotoaviso}>
              <Text style={styles.txthomes}>AVISO DE PRIVACIDAD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addshome} onPress={gototerminos}>
              <Text style={styles.txthomes}>TERMINOS Y CONDICIONES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Login;
