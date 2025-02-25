import { FlatList, StyleSheet, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategories(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      key={"#"}
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => {
        "#" + item.id;
      }}
      renderItem={renderCategories}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
