import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import UserRoutes from "./user.routes";
import RegisterAccount from "../pages/RegisterAccount";

const auth = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <auth.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <auth.Screen name="Login" component={Login} />
      <auth.Screen name="Home" component={Home} />
      <auth.Screen name="Signup" component={RegisterAccount} />
      <auth.Screen name="User" component={UserRoutes} />
    </auth.Navigator>
  );
}
