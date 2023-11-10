import React, { useContext, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Container } from "./styled";
import { BtnText, HeaderText } from "../AddDebt/styled";
import { DefaultBtn, DefaultTextField } from "../../utils/defaultStyles";
import { axiosInstance } from "../../utils/axios";
import { UserContext } from "../../context/UserContext";
import GoBackButton from "../../components/goBackButton";
import { AuthContext } from "../../context/AuthContext";

export default function ChangeReceived() {
  const { payment, load } = useContext(UserContext);
  const [value, setValue] = useState("");
  const { data } = useContext(AuthContext);

  async function handleSubmit() {
    try {
      if (value) {
        const obj = {
          ...payment,
        };

        obj.userReceived = value;
        await axiosInstance.patch(`/payments/${payment.id}`, obj, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        Alert.alert("success", "Teto atualizdo com sucesso");
        await load();
        setValue("");
      }
    } catch (error) {
      if (error instanceof Error) Alert.alert("error", error.message);
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GoBackButton />
        <HeaderText>Mudar Teto de gasto</HeaderText>
        <DefaultTextField
          placeholder="Valor"
          onChangeText={setValue}
          keyboardType="number-pad"
        />
        <DefaultBtn onPress={handleSubmit}>
          <BtnText>Salvar</BtnText>
        </DefaultBtn>
      </Container>
    </SafeAreaView>
  );
}
