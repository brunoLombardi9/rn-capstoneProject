import React from "react";
import { getUser } from "../UserContext";
import Header from "./Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import Loading from "../screens/Loading";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function Screens() {
  const { userData, loading } = getUser();
  console.log({ userData, loading });

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    >
      {loading && <Stack.Screen name="Loading" component={Loading} />}

      {!loading && (
        <>
          {!userData ? (
            <>
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
            </>
          )}
        </>
      )}
    </Stack.Navigator>
  );
}
