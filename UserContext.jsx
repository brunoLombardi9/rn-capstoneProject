import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getUserData() {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUserData(JSON.parse(user));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function setUser(userData) {
    try {
      setLoading(true);
      setUserData(userData);
      const user = JSON.stringify(userData);
      await AsyncStorage.setItem("user", user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function logOutUser() {
    try {
      setLoading(true);
      setUserData(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function modifyUser(userData) {
    try {
      const user = await JSON.parse(AsyncStorage.getItem("user"));
      const newUserData = { ...user, ...userData };
      setUser(newUserData);
      await AsyncStorage.setItem("user", JSON.stringify(newUserData));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Context.Provider
      value={{ userData, loading, setUser, logOutUser, modifyUser }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserContext;

export function getUser() {
  return useContext(Context);
}
