import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils/theme";

export default function Product({ item }) {
  const picture = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`;
  return (
    <View style={styles.container}>
      <View style={styles.firstCol}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.secondCol}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: picture,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    paddingVertical: 10
  },
  firstCol: {
    flex: 3/4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15
  },
  description: {
    color: colors.green
  },
  price: {
    fontWeight: "bold",
  },
  secondCol: {
    flex: 1/3,
    justifyContent: "center",
    alignItems:"center"
  },
  image: {
    height: 80,
    width: 80,
  },
});
