import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function List({data}) {
  {
    return data.map((dataPoint) => (
      <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.list}>{dataPoint}</Text>
      </View>
    ));
  }
}
export default List;

const styles = StyleSheet.create({
  list: {
    fontFamily: "merriweather",
    textAlign: 'center'
  },
  listItem: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.primary
  }
});
