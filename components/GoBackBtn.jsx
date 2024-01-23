import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../utils/theme";

export default function GoBackBtn({handleGoBack}){
  return (
    <Pressable style={styles.goBackBtn} onPress={handleGoBack}>
      <Icon name="arrowleft" size={20} color={colors.light} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    backgroundColor: colors.green,
    padding: 10,
    borderRadius: 100,
    position: "absolute",
    marginLeft: 10,
    top: "50%",
  },
});

