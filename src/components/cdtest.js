import React, { useEffect, useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  View,
  Text,
  TextInput,  
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import NavigationStrings from "./NavigationStrings";
import ImagePath from "./ImagePath";
import styles from "../Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CustomDrawer(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

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
        setIsLoggedIn(true); // User is logged in
      }

      if (vigenciaValue !== null) {
        setVigencia(vigenciaValue);
      }
    } catch (error) {
      console.log('Error reading data from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    getDataFromStorage();
  }, []);

  const handleLogout = async () => {
    try {
      // Eliminar los datos de sesión almacenados
      await AsyncStorage.removeItem("JWT_Token");
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("vigencia");

      // Actualizar el estado para indicar que el usuario ha cerrado sesión
      setIsLoggedIn(false);

      // Navegar a la pantalla de inicio de sesión
      navigation.navigate(NavigationStrings.LOGIN);
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  const { navigation } = props;

  return (
    <DrawerContentScrollView
      style={{ backgroundColor: "#000000" }}
      {...props}
    >
      <View style={{ backgroundColor: "#0101", marginBottom: 30,marginTop:30 }}>
        <Text
          onPress={() => navigation.closeDrawer()}
          style={{
            color: "#fff",
            alignSelf: "flex-end",
            fontSize: 15,
            marginRight: 20,
          }}
        >
          CERRAR
        </Text>
        <Image source={ImagePath.Licylogo} style={styles.imgsidebar} />
      </View>

      {isLoggedIn && ( // Render the DrawerItems only if the user is logged in
        <View>
          <DrawerItem
            style={{backgroundColor:'#7F0CB2'}}
            label="ADMINISTRACIÓN"
            onPress={() => NestedDrawerItemAdd()}
            icon={() => <Image source={ImagePath.tools} style={styles.icon} />}
            labelStyle={{ color: "white", fontWeight: "400" }}
          />

          {NestedDrawerItem && ( // Conditionally render nested items based on state
            <View>
              <DrawerItem
                label="FLUJOS ANEXOS"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"FLUJOSANEXOS"})}
                icon={() => <Image source={ImagePath.flujosan} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="FLUJOS "
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"FLUJOS"})}
                icon={() => <Image source={ImagePath.flujos} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
            </View>
          )}

          <DrawerItem
            style={{backgroundColor:'#7F0CB2'}}
            label="LICITACIONES"
            onPress={() => NestedDrawerItemAddLi()}
            icon={() => <Image source={ImagePath.licita} style={styles.icon} />}
            labelStyle={{ color: "white", fontWeight: "400" }}
          />

          {NestedDrawerItemLi && ( // Conditionally render nested items based on state
            <View>
              <DrawerItem
                label="NUEVAS LICITACIONES "
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"NUEVASLICITACIONES"})}
                icon={() => <Image source={ImagePath.mislic} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="MIS LICITACIONES"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"MISLICITACIONES"})}
                icon={() => <Image source={ImagePath.mislicitaciones} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />

              <DrawerItem
                label="MIS FAVORITOS"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"FAVORITOS"})}
                icon={() => <Image source={ImagePath.misfav} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="HISTÓRICO"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"HISTORICO"})}
                icon={() => <Image source={ImagePath.historic} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
            </View>
          )}

          <DrawerItem
            style={{backgroundColor:'#7F0CB2'}}
            label="CONFIGURACIÓN"
            onPress={() => NestedDrawerItemAddConfig()}
            icon={() => <Image source={ImagePath.config} style={styles.icon} />}
            labelStyle={{ color: "white", fontWeight: "400" }}
          />

          {NestedDrawerItemConfig && ( // Conditionally render nested items based on state
            <View>
              <DrawerItem
                label="MIS PREFERENCIAS "
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"PREFERENCIAS"})}
                icon={() => <Image source={ImagePath.star} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="Pagos"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"PAGOS"})}
                icon={() => <Image source={ImagePath.myacount} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="MIS EMPRESAS"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"MISEMPRESAS"})}
                icon={() => <Image source={ImagePath.trade} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />

              <DrawerItem
                label="MIS COLABOLADORES"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"COLABORADORES"})}
                icon={() => <Image source={ImagePath.collab} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
              <DrawerItem
                label="MI CUENTA"
                onPress={() => navigation.navigate(NavigationStrings.HOMEVIEW,{LabelView:"MICUENTA"})}
                icon={() => <Image source={ImagePath.myacount} style={styles.icon} />}
                labelStyle={{ color: "white", fontWeight: "400" }}
              />
            </View>
          )}
        </View>
      )}

      {isLoggedIn && ( // Render the logout button only if the user is logged in
        <DrawerItem
          label="CERRAR SESION"
          onPress={handleLogout}
          icon={() => <Image source={ImagePath.myacount} style={styles.icon} />}
          labelStyle={{ color: "white", fontWeight: "400" }}
        />
      )}
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
