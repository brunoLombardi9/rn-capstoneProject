import { NavigationContainer } from "@react-navigation/native";
import UserContext from "./UserContext";
import Screens from "./components/Screens";

export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </UserContext>
  );
}
