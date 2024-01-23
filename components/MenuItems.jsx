import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/theme";
import Product from "./Product";

export default function MenuItems({ menu }) {
  const categories = ["Starters", "Mains", "Desserts", "Drinks"];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const data = selectedCategories.length === 0 ? menu : [];

  selectedCategories.forEach((category) => {
    const products = menu.filter(
      (product) => product.category == category.toLowerCase()
    );
    data.push(...products);
  });

  function handleFilter(option) {
    const isSelected = selectedCategories.includes(option);
    if (isSelected) {
      const updatedCategories = selectedCategories.filter(
        (category) => category !== option
      );
      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([...selectedCategories, option]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ORDER FOR DELIVERY!</Text>
      <View>
        <ScrollView horizontal={true}>
          {categories.map((c) => {
            const isSelected = selectedCategories.includes(c);
            const btnStyle = isSelected
              ? styles.selectedBtn
              : styles.categoryBtn;
            const textColor = isSelected
              ? styles.btnText
              : styles.selectedBtnText;

            return (
              <Pressable
                key={c}
                style={btnStyle}
                onPress={() => handleFilter(c)}
              >
                <Text style={textColor}>{c}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={styles.horizontalRule} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Product item={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 1.7,
    paddingHorizontal: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  categoryBtn: {
    marginHorizontal: 5,
    borderRadius: 16,
    backgroundColor: colors.light,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  selectedBtn: {
    marginHorizontal: 5,
    borderRadius: 16,
    backgroundColor: colors.yellow,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnText: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 15,
  },
  selectedBtnText: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 15,
  },
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});
