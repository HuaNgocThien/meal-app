import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategories(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
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
