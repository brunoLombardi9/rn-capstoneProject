import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/url";
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";

export default function Home() {
  const [menu, setMenu] = useState([]);

  async function getMenu() {
    try {
      const { data } = await axios.get(url);
      setMenu(data.menu);
    } catch (error) {
      console.log(error);
      setMenu([]);
    }
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <View style={styles.container}>
      <Hero />
      <MenuItems menu={menu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
