import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import TestScreen from "./screens/TestScreen";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import Colors from "./constants/Colors";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn("SplashScreen hide error:", error);
      }
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{contentStyle: {backgroundColor:Colors.whiteApp}}}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              headerTitleStyle: {
                fontFamily: "playfair",
                fontSize: 24,
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealOverviewScreen}
            // options={{
            //   headerLeft: () => (
            //     <Pressable
            //       onPress={() => navigation.goBack()}
            //       style={{ marginLeft: 10 }}
            //     >
            //       <Ionicons
            //         name="arrow-back"
            //         size={24}
            //         color="#96ce5f"
            //       />
            //     </Pressable>
            //   ),
            // }}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
