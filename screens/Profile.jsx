import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { getUser } from "../UserContext";
import { colors } from "../utils/theme";

export default function Profile() {
  const { logOutUser } = getUser();
  return (
    <View>
      <Text>Profile</Text>

      <Pressable onPress={logOutUser}>
        <View style={styles.logoutBtn}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    paddingVertical: 15,
    paddingHorizontal: 70,
    backgroundColor: colors.green,
    borderRadius: 16,
  },
});
