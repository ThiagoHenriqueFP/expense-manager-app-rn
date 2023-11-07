import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddDebt from "../pages/AddDebt";
import ChangeReceived from "../pages/ChangeReceived";
import ListDebts from "../pages/ListDebts";
import Account from "../pages/Account";

const user = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <user.Navigator screenOptions={{ headerShown: false }}>
      <user.Screen name="AddDebt" component={AddDebt} />
      <user.Screen name="ChangeReceived" component={ChangeReceived} />
      <user.Screen name="ListDebts" component={ListDebts} />
      <user.Screen name="Account" component={Account} />
    </user.Navigator>
  );
}
