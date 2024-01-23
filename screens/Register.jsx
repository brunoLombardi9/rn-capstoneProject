import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { getUser } from "../UserContext";
import { colors } from "../utils/theme";

export default function Register() {
  const { setUser } = getUser();
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Pressable onPress={setUser}>
        <Text>Ir</Text>
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
});
