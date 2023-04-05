import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
        "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
        "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
        "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  return (
    fontLoaded && (
      <View style={styles.container}>
        <Text style={{ fontFamily: "NotoSans-Medium" }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
