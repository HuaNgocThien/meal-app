import { StyleSheet, Text, View } from "react-native";

function TestScreen() {
  return (
    <View style={styles.container}>
      <Text>Test Screen</Text>
    </View>
  );
}

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
});
