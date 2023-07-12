import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import firebase from "./src/services/firebaseConnection";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
