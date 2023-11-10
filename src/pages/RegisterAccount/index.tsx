import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { Container, HeaderText, TextBtn } from "./styled";
import { DEFAULT_DARK_GREY } from "../../utils/colors";
import { DefaultBtn, DefaultTextField } from "../../utils/defaultStyles";
import { axiosInstance } from "../../utils/axios";
import { useNavigation } from "@react-navigation/native";

export default function RegisterAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [wage, setWage] = useState("");
  const { navigate } = useNavigation<any>();

  async function handleCreateAccount() {
    try {
      if (name && email && password && confirmPassword && wage) {
        if (password !== confirmPassword)
          throw new Error("Passwords not match");

        const body = {
          name,
          email,
          password,
          wage: Number.parseFloat(wage),
        };

        await axiosInstance.post("/auth/register", body);

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setWage("");
        Alert.alert("Success", "Usuário criado com sucesso");
        navigate("Login");
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("error", error.message);
        console.log(error.message);
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: DEFAULT_DARK_GREY }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <HeaderText>Cadastrar-se</HeaderText>
          <DefaultTextField
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <DefaultTextField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <DefaultTextField
            placeholder="Senha"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          <DefaultTextField
            placeholder="Confirme a senha"
            value={confirmPassword}
            secureTextEntry
            onChangeText={setConfirmPassword}
          />
          <DefaultTextField
            placeholder="Salário base"
            keyboardType="number-pad"
            value={wage}
            onChangeText={setWage}
          />

          <DefaultBtn onPress={handleCreateAccount}>
            <TextBtn>Cadastrar</TextBtn>
          </DefaultBtn>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
