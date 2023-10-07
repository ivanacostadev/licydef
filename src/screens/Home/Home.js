import React, { useState } from "react";

import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import NavigationStrings from '../../components/NavigationStrings';


import styles from "../../Styles";

import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";






const Home = ({navigation}) => {
  const LicyHome = "https://lizzi.appsholos.com/dev/login";
  const Google = "https://www.google.com/";

  const goToLogin = () => {
    navigation.navigate(NavigationStrings.LOGIN);
  };

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

  getDataFromStorage();



  
  console.log(isLoggedIn+"LEGEDNNN")


  return (
    <LinearGradient
      colors={["#000000", "#000000"]}
      style={styles.linearGradient}
    >
      <ScrollView>
        <View style={styles.containerLogin}>
        <Image
              style={styles.imgintro}
              source={require('../../../assets/img/lizzilogo.png')}
            />
                 <Image
              style={styles.imgintro}
              source={require('../../../assets/img/logo.png')}
            />

      


  <TouchableOpacity style={styles.buttonHome} onPress={goToLogin} >
  <Text style={styles.txtlogsubmit}>INICIAR SESI&Oacute;N</Text>
</TouchableOpacity>
      

      

      
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
