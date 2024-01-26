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
  const hideHeader = { headerShown: false }

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    >
      {loading && <Stack.Screen name="Loading" component={Loading} options={hideHeader} />}

      {!loading && (
        <>
          {!userData ? (
            <>
              <Stack.Screen name="Onboarding" component={Onboarding} options={hideHeader} />
              <Stack.Screen name="Register" component={Register} options={hideHeader} />
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
