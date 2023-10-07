import React from "react";
import NavigationStrings from "../components/NavigationStrings";
import Login from "../screens/Login/Login";
import TabRoutes from "./TabRoutes";
import HomeView from "../screens/webviews/Homeview";




export default function (Stack){
    return(
        <>
        <Stack.Screen name={NavigationStrings.TABS} component={TabRoutes}  />
        <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
        <Stack.Screen name={NavigationStrings.HOMEVIEW} component={HomeView} />
        
        
        </>

    )
}