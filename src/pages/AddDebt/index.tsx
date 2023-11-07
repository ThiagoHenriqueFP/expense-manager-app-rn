import React, { useContext, useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import {
  Btn,
  BtnText,
  Container,
  GoBackBtn,
  HeaderText,
  Input,
} from "./styled";
import { axiosInstance } from "../../utils/axios";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import GoBackButton from "../../components/goBackButton";

export default function AddDebt() {
  const [value, setValue] = useState("");
  const [parts, setParts] = useState("");
  const [description, setDescription] = useState("");
  const { data } = useContext(AuthContext);
  const { load } = useContext(UserContext);

  async function handleSubmit() {
    if (Number.parseFloat(value) > 0 && Number.parseFloat(parts) > 0) {
      try {
        const obj = {
          userId: data.id,
          value: Number.parseFloat(value),
          parts: Number.parseInt(parts),
          description,
          startAt: new Date().toLocaleDateString("default", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        };
        await axiosInstance.post(`/debts`, obj);
        await load();

        setValue("");
        setParts("");
        setDescription("");

        Alert.alert("success", "debt successfuly saved");
      } catch (error) {
        if (error instanceof Error) Alert.alert("error", error.message);
        console.log(error);
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBackButton />
        <HeaderText>Adicionar Debito</HeaderText>
        <Input
          placeholder="Valor"
          keyboardType="number-pad"
          value={value}
          onChangeText={setValue}
        />
        <Input
          placeholder="Numero de parcelas"
          keyboardType="number-pad"
          value={parts}
          onChangeText={setParts}
        />
        <Input
          placeholder="Descrição"
          autoCapitalize="none"
          value={description}
          onChangeText={setDescription}
        />
        <Btn onPress={handleSubmit}>
          <BtnText>Inserir</BtnText>
        </Btn>
      </Container>
    </SafeAreaView>
  );
}
