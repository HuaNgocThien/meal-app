import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import Colors from "./constants/Colors";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: Colors.primary },
        drawerActiveBackgroundColor: Colors.lightBlue,
        drawerLabelStyle: {
          color: Colors.grayText,
        },
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          headerTitleStyle: {
            fontFamily: "playfair",
            fontSize: 24,
          },
          drawerIcon: (color, size) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: (color, size) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              contentStyle: { backgroundColor: Colors.whiteApp },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealOverviewScreen}
              options={{
                headerTitleStyle: {
                  fontFamily: "playfair",
                  fontSize: 24,
                },
              }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                headerTitleStyle: {
                  fontFamily: "playfair",
                  fontSize: 24,
                },
                title: "Let's cook",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
