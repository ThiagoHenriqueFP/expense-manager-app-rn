import React, { useState } from "react";
import Routes from "./src/routes";
import { loadAsync } from "expo-font";
import { AuthProvider } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/UserContext";
import { Text } from "react-native";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const fonts = {
    Poppins: require("./assets/fonts/Poppins.ttf"),
  };

  (async () => {
    await loadAsync(fonts);
    setIsLoading(false);
  })();

  return isLoading ? (
    <Text>carregando</Text>
  ) : (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
