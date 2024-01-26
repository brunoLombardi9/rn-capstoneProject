import { View, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";
import GoBackBtn from "./GoBackBtn";
import { getUser } from "../UserContext";

export default function Header({ navigation }) {
  const route = useRoute().name;
  const { userData } = getUser();

  return (
    <View style={styles.header}>
      {route === "Profile" && (
        <GoBackBtn handleGoBack={() => navigation.pop()} />
      )}
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.logo}
      >
        <Image
          source={require("../assets/images/Logo.png")}
          resizeMode="contain"
        />
      </Pressable>
      {userData && (
        <Pressable
          style={styles.profileImgContainer}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="circle-user" size={40} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    width: "50%",
    height: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  profileImgContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
