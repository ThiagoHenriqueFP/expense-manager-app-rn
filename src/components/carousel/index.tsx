import React, { useContext, useEffect, useState } from "react";
import { BigYellowText, BoldText, Container, DebtButton } from "./styled";

import { DEFAULT_YELLOW } from "../../utils/colors";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { DefaultText } from "../../utils/defaultStyles";
import { UserContext } from "../../context/UserContext";
import { LoaderView } from "../loader/styled";
import { useNavigation } from "@react-navigation/native";

interface NavigationProp {
  navigate: (navigator: string, screen: NestedProp) => void;
}

interface NestedProp {
  screen: string;
  params: any;
}

export default function Carousel() {
  // const [items, setItems] = useState<React.ReactElement[]>([]);
  const { allPayments, load } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { navigate } = useNavigation<NavigationProp>();

  function handleListDebts(id: number, date: string) {
    const payment = allPayments.find((it) => it.id == id);
    navigate("User", {
      screen: "ListDebts",
      params: { id: id, date: date, payment: payment },
    });
  }

  function checkIsEmpty(): boolean {
    if (allPayments.length == 0) return true;
    return false;
  }

  useEffect(() => {
    (async () => {
      if (isLoading) {
        await load();
        if (allPayments.length > 0) setIsLoading(false);
      }
    })();
  }, [isLoading, allPayments]);

  if (isLoading)
    return (
      <LoaderView>
        <ActivityIndicator color={DEFAULT_YELLOW} />
      </LoaderView>
    );
  if (!checkIsEmpty())
    return (
      //change to flatlist
      <ScrollView horizontal={true}>
        {allPayments.map((it) => {
          const date = new Date(it.date);
          const monthAndYear = `${date.toLocaleString("default", {
            month: "long",
          })} ${date.getFullYear()}`;
          return (
            <Container key={it.id}>
              <BoldText>{monthAndYear}</BoldText>
              <BigYellowText>R$ {it.debtValue}</BigYellowText>
              <DefaultText>Teto de gastos - R$ {it.userReceived}</DefaultText>

              <DebtButton onPress={() => handleListDebts(it.id, monthAndYear)}>
                <DefaultText style={{ color: DEFAULT_YELLOW }}>
                  Ver compras
                </DefaultText>
              </DebtButton>
            </Container>
          );
        })}
      </ScrollView>
    );

  if (checkIsEmpty()) return <DefaultText>Sem contas para exibir</DefaultText>;
}
