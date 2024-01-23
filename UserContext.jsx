import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);

  async function getUserData() {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUserData(parseInt(user));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function setUser() {
    try {
      setUserData(true)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Context.Provider value={{ userData, loading, setUser }}>
      {children}
    </Context.Provider>
  );
};

export default UserContext;

export function getUser() {
  return useContext(Context);
}
