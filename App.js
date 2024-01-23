import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import UserContext from "./UserContext";
import Screens from "./components/Screens";

export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
          <Screens />
        {/* </View> */}
      </NavigationContainer>
    </UserContext>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
