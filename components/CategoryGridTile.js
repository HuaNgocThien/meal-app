import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

function CategoryGridTile({ title, color }) {
  const containerStyle =
    Platform.OS === "android"
      ? [
          styles.gridItem,
          { backgroundColor: Platform.OS === "android" ? color : null },
        ]
      : styles.gridItem;

  const innerContainerStyle =
    Platform.OS === "ios"
      ? [
          styles.innerContainer,
          { backgroundColor: Platform.OS === "ios" ? color : null },
        ]
      : styles.innerContainer;

  return (
    <View style={containerStyle}>
      <Pressable
        android_ripple={{ color: Colors.primary }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonIOSPressed : null,
        ]}
      >
        <View style={innerContainerStyle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonIOSPressed: {
    opacity: 0.5,
  },
  title: {
    fontFamily: "playfair",
    fontSize: 18,
    color: Colors.grayText,
  },
});
