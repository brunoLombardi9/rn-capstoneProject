import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/theme";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={colors.dark}
        style={styles.loadingIcon}
      />
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
  loadingIcon: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
});
