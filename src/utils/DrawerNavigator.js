import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import NavigationStrings from "../components/NavigationStrings";
import { useLogin } from "../components/LoginProvider";
import HomeView from "../screens/webviews/Homeview";
import ImagePath from "../components/ImagePath";
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const [nombreuser, setNombreUser] = useState("");
  const [apellidom, setApellidom] = useState("");
  const [apellidop, setApellidop] = useState("");

  const [NestedDrawerItem, setNestedDrawerItem] = useState("");
  const [NestedDrawerItemLi, setNestedDrawerItemLi] = useState("");
  const [NestedDrawerItemConfig, setNestedDrawerItemConfig] = useState("");



  const NestedDrawerItemAddLi = () => {
    if (NestedDrawerItemLi == true) {
      setNestedDrawerItemLi(false);
    } else {
      setNestedDrawerItemLi(true);
    }
  };

  const NestedDrawerItemAddConfig = () => {
    if (NestedDrawerItemConfig == true) {
      setNestedDrawerItemConfig(false);
    } else {
      setNestedDrawerItemConfig(true);
    }
  };
  const { setIsLoggedIn } = useLogin();

  const getDataFromStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem("nombre");
      const apPat = await AsyncStorage.getItem("appat");
      const apMat = await AsyncStorage.getItem("apmat");

      if (nombre !== null) {
        setNombreUser(nombre);
        //console.log(token_jwt+"JWT")
      }

      if (apPat !== null) {
        setApellidop(apPat);
      }

      if (apMat !== null) {
        setApellidom(apMat);
      }
    } catch (error) {
      console.log("Error reading data from AsyncStorage:", error);
    }
  };

  getDataFromStorage();

  return (
    <DrawerContentScrollView style={{ backgroundColor: "#000000" }} {...props}>
         
     




      <View
        style={{ backgroundColor: "#0101", marginBottom: 30, marginTop: 30 }}
      >
        <Text
          style={{
            color: "#fff",
            alignSelf: "center",
            fontSize: 18,
            marginRight: 20,
          }}
        >
          {nombreuser} {apellidop} {apellidom}
        </Text>
      </View>

      <View id="navigationdrawer">
        <View>
   

          <DrawerItem
            style={{ backgroundColor: "#7F0CB2" }}
            label="LICITACIONES"
            onPress={() => {
              NestedDrawerItemAddLi();
            }}
            icon={() => <Image source={ImagePath.licita} style={styles.icon} />}
            labelStyle={{ color: "white", fontWeight: "400" }}
          />

          {NestedDrawerItemLi == true ? (
            <View>
              <DrawerItem
                label="NUEVAS LICITACIONES "
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "NUEVASLICITACIONES",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.mislic} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="MIS LICITACIONES"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "MISLICITACIONES",
                  })
                }
                icon={() => (
                  <Image
                    source={ImagePath.mislicitaciones}
                    style={styles.icon}
                  />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />

              <DrawerItem
                label="MIS FAVORITOS"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "FAVORITOS",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.misfav} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="HISTÓRICO"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "HISTORICO",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.historic} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
            </View>
          ) : null}
          <DrawerItem
            style={{ backgroundColor: "#7F0CB2" }}
            label="CONFIGURACIÓN"
            onPress={() => {
              NestedDrawerItemAddConfig();
            }}
            icon={() => <Image source={ImagePath.config} style={styles.icon} />}
            labelStyle={{ color: "white", fontWeight: "400" }}
          />

          {NestedDrawerItemConfig == true ? (
            <View>
              <DrawerItem
                label="MIS PREFERENCIAS "
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "PREFERENCIAS",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.star} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="PAGOS"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "PAGOS",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.myacount} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="MIS EMPRESAS"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "MISEMPRESAS",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.trade} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />

              <DrawerItem
                label="MIS COLABOLADORES"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "COLABORADORES",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.collab} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="MI CUENTA"
                onPress={() =>
                  navigation.navigate(NavigationStrings.HOMEVIEW, {
                    LabelView: "MICUENTA",
                  })
                }
                icon={() => (
                  <Image source={ImagePath.myacount} style={styles.icon} />
                )}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
            </View>
          ) : null}

          <DrawerItem
            style={{ backgroundColor: "#7F0CB2"  }}
            label="CERRAR SESION"
            onPress={() => setIsLoggedIn(false)}
            icon={() => <Image source={ImagePath.logout} style={styles.icon} />}
            labelStyle={{ color: "white", fontWeight: "400" }}
          />
        </View>


        
        <Text
          style={{
            marginTop: 120,
            color: "#fff",
            alignSelf: "center",
            fontSize: 10,
            marginRight: 20,
          }}
        >
          Versi&oacute;n 0.0.4b
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#000000", // Cambiar aquí el color de fondo del encabezado
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: "#FFFFFF", // Cambiar aquí el color del texto del encabezado
          // Otros estilos de texto que desees aplicar
        },
        headerTintColor: "#FFFFFF", // Cambiar aquí el color del icono de navegación y texto del encabezado
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={HomeView} name={NavigationStrings.HOMEVIEW} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
