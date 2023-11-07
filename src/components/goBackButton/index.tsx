import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GoBackBtn } from "../../pages/AddDebt/styled";
import Icon from "react-native-vector-icons/MaterialIcons";
import { DEFAULT_DARK_GREY } from "../../utils/colors";

export default function GoBackButton() {
  const { goBack } = useNavigation();
  const exitIcon = (
    <Icon name="exit-to-app" size={34} color={DEFAULT_DARK_GREY} />
  );

  function handleGoBack() {
    goBack();
  }

  return <GoBackBtn onPress={handleGoBack}>{exitIcon}</GoBackBtn>;
}
