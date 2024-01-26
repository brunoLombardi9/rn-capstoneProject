import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { colors } from "../utils/theme";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.header}>Are you hungry?</Text>
        <Icon name="circle" size={10} color={colors.dark} />
        <Pressable onPress={() => navigation.navigate("Register")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </Pressable>
      </View>
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
  welcomeBox: { justifyContent: "center", alignItems: "center", gap: 20 },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 70,
    backgroundColor: colors.green,
    borderRadius: 16,
    borderWidth: 2,
  },
  buttonText: {
    color: colors.light,
    fontSize: 20,
  },
});
