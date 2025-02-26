import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "playfair-bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
});
