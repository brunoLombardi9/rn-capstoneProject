import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils/theme";

export default function Hero() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Little Lemon</Text>

      <View style={styles.subContainer}>
        <View style={styles.firstCol}>
          <Text style={styles.subHeader}>Chicago</Text>
          <Text style={styles.heroText}>{heroText}</Text>
        </View>

        <View style={styles.secondCol}>
          <Image
            source={require("../assets/images/Hero image.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2.3,
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingTop: 15
  },
  header: {
    color: colors.yellow,
    fontSize: 40,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
  },
  firstCol: {
    flex: 1 / 2,
    gap: 15,
  },
  subHeader: {
    color: colors.light,
    fontSize: 25,
    fontWeight: "bold",
  },
  heroText: {
    color: colors.light,
    fontSize: 15,
  },
  searchIcon: {
    borderRadius: 100,
    backgroundColor: colors.light,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  secondCol: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 16,
  },
});

const heroText =
  "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
