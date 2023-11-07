import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  DEFAULT_DARK_GREY,
  DEFAULT_LIGTH_GREY,
  DEFAULT_WHITE,
  DEFAULT_YELLOW,
} from "../../utils/colors";
import { Container, Divider, Separator } from "../../pages/Home/styled";
import Chart from "../../components/chart";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { LoaderView } from "../loader/styled";

export default function StatsContainer() {
  const { metrics, payment, load } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function checkIsEmpty(): boolean {
    if (Object.keys(payment).length == 0) return true;
    return false;
  }

  useEffect(() => {
    (async () => {
      if (isLoading) {
        await load();
        if (payment) setIsLoading(false);
      }
    })();
  }, [isLoading, metrics, payment]);

  const date = new Date();
  const monthAndYear = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;

  if (isLoading)
    return (
      <LoaderView>
        <ActivityIndicator color={DEFAULT_YELLOW} />
      </LoaderView>
    );

  if (!checkIsEmpty())
    return (
      <View style={style.statsContainer}>
        <Divider>
          <Separator>
            <Text style={[style.defaultText, style.boldText]}>
              Gasto Mensal
            </Text>
            <Text style={[style.defaultText, style.boldText]}>
              {monthAndYear}
            </Text>
          </Separator>
          <Container>
            <Separator direction="row">
              <Text style={[style.defaultText, style.boldText]}>Meta</Text>
              <Text style={style.defaultText}>R$ {payment.userReceived}</Text>
            </Separator>
            <Separator direction="row">
              <Text style={[style.defaultText, style.boldText]}>Gasto</Text>
              <Text style={style.defaultText}>R$ {payment.debtValue}</Text>
            </Separator>
          </Container>
          <Text style={style.defaultText}>
            <Text style={style.boldText}>{Math.abs(metrics.percentage)}%</Text>{" "}
            {metrics.percentage > 0 ? "abaixo " : "acima "}
            do limite de gastos
          </Text>
        </Divider>
        <Divider>
          <View style={style.chartContainer}>
            <Chart />
            <Text style={{ color: DEFAULT_WHITE }}>limite de gastos</Text>
            <Text style={{ color: DEFAULT_YELLOW }}>Valor gasto</Text>
          </View>
        </Divider>
      </View>
    );

  if (checkIsEmpty()) {
    return (
      <View style={style.statsContainer}>
        <Divider empty>
          <Container>
            <Separator direction="row">
              <Text style={[style.defaultText, style.boldText]}>
                Sem Dados para exibir. Comece a usar o app para habilitar
                métricas
              </Text>
            </Separator>
          </Container>
        </Divider>
      </View>
    );
  }
}

const style = StyleSheet.create({
  defaultText: {
    color: DEFAULT_WHITE,
    fontSize: 16,
    flexWrap: "wrap",
  },

  boldText: {
    fontWeight: "bold",
  },

  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: DEFAULT_DARK_GREY,
    margin: 25,
    marginTop: 48,
    padding: 25,
    borderRadius: 25,
    flex: 1,
    minHeight: 200,
  },

  separator: {
    margin: 0,
  },

  chartContainer: {
    marginLeft: 25,
    gap: 12,
  },
});
