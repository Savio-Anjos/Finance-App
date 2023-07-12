import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";

const AppStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

export default AuthRoutes;
