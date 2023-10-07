import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ route }) => {
  const { url, title } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default WebViewScreen;