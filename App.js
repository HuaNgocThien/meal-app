import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    playfair: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "playfair-black": require("./assets/fonts/PlayfairDisplay-Black.ttf"),
    "playfair-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    merriweather: require("./assets/fonts/Merriweather-Regular.ttf"),
    "merriweather-black": require("./assets/fonts/Merriweather-Black.ttf"),
    "merriweather-bold": require("./assets/fonts/Merriweather-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <CategoriesScreen />
    </View>
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
