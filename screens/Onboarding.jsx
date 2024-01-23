import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../utils/theme";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>First Time? Sign in</Text>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <View>
          <Text>Hola</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
});
