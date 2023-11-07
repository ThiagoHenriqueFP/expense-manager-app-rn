import React, { useEffect, useState } from "react";
import { IPayment } from "../../context/UserContext";
import { axiosInstance } from "../../utils/axios";
import { ActivityIndicator, Alert, FlatList, SafeAreaView } from "react-native";
import { LoaderView } from "../../components/loader/styled";
import { DEFAULT_YELLOW } from "../../utils/colors";
import { DefaultText } from "../../utils/defaultStyles";
import {
  BoldText,
  Container,
  Header,
  Scroller,
  Separator,
  TextContainer,
} from "./styled";
import GoBackButton from "../../components/goBackButton";

interface IProps {
  paymentId: number;
}

interface IDebts {
  id: number;
  description: string;
  value: number;
  parts: number;
  startAt: Date;
}

interface ExpandedPayment {
  payment: IPayment;
  debts: IDebts[];
}

export default function ListDebts({ route }: any) {
  const [payment, setPayment] = useState<IDebts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (isLoading) {
          const response = await axiosInstance.get(
            `/payments/${route.params.id}/debts`
          );
          setPayment(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert("error", error.message);
          console.log(error);
        }
      }
    })();
  }, [isLoading, payment]);

  return isLoading ? (
    <LoaderView>
      <ActivityIndicator color={DEFAULT_YELLOW} />
    </LoaderView>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TextContainer>
          <Header>Fatura de {route.params.date}</Header>
          <DefaultText style={{ fontSize: 16, color: DEFAULT_YELLOW }}>
            R$ {route.params.payment.debtValue}
          </DefaultText>
        </TextContainer>
        <GoBackButton />
        <Scroller>
          <FlatList
            data={payment}
            renderItem={({ item }) => (
              <Separator>
                <BoldText style={{ fontSize: 24, marginBottom: 4 }}>
                  {item.description}
                </BoldText>
                <DefaultText style={{ fontSize: 20, color: DEFAULT_YELLOW }}>
                  <BoldText>R$ </BoldText>
                  {item.value}
                </DefaultText>
                <DefaultText style={{ fontSize: 16 }}>
                  {" "}
                  <DefaultText style={{ color: DEFAULT_YELLOW }}>
                    {" "}
                    x{" "}
                  </DefaultText>
                  {item.parts}
                </DefaultText>
              </Separator>
            )}
            keyExtractor={(item) => item.id}
            style={{ maxHeight: 400 }}
          />
        </Scroller>
      </Container>
    </SafeAreaView>
  );
}
