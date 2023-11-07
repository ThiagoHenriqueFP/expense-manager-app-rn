import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { OptionsBtn, OptionsContainer, OptionsText } from "./styled";
import { DEFAULT_YELLOW } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

interface NavigationProp {
  navigate: (navigator: string, screen: NestedProp) => void;
}

interface NestedProp {
  screen: string;
}

const paymentIcon = <Icon name="payments" color={DEFAULT_YELLOW} size={30} />;

const walletIcon = (
  <Icon name="account-balance-wallet" color={DEFAULT_YELLOW} size={30} />
);

export default function Options() {
  const { navigate } = useNavigation<NavigationProp>();

  function handleAddPayment() {
    navigate("User", { screen: "AddDebt" });
  }

  function handleChangeReceivedValue() {
    navigate("User", { screen: "ChangeReceived" });
  }
  return (
    <OptionsContainer>
      <OptionsBtn onPress={handleAddPayment}>
        {paymentIcon}
        <OptionsText>Adicionar debito</OptionsText>
      </OptionsBtn>
      <OptionsBtn onPress={handleChangeReceivedValue}>
        {walletIcon}
        <OptionsText>Mudar teto de gasto</OptionsText>
      </OptionsBtn>
    </OptionsContainer>
  );
}
