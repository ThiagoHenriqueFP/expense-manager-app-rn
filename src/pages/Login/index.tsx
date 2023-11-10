import React, { useState } from "react";
import {
  CreateAccount,
  HeaderText,
  LoginBtn,
  LoginContainer,
  TextBtn,
  TextField,
} from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { DefaultText } from "../../utils/defaultStyles";

interface NavigationProp {
  navigate: (Screen: string) => void;
}

export default function Login() {
  const { signIn } = React.useContext(AuthContext);
  const { navigate } = useNavigation<NavigationProp>();
  const [username, setUsername] = useState<string>("thiago@mail.com");
  const [password, setPassword] = useState<string>("thiago");

  async function handleSubmit() {
    if (username && password) {
      const data = {
        username: username.trim(),
        password: password.trim(),
      };
      if (await signIn(data)) {
        setPassword("");
        setUsername("");
        navigate("Home");
      }
    }
  }

  function handleSignUp() {
    navigate("Signup");
  }

  return (
    <LoginContainer>
      <HeaderText>Welcome</HeaderText>
      <TextField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <LoginBtn onPress={handleSubmit}>
        <TextBtn>Entrar</TextBtn>
      </LoginBtn>
      <CreateAccount onPress={handleSignUp}>
        <DefaultText>Cadastrar-se</DefaultText>
      </CreateAccount>
    </LoginContainer>
  );
}
