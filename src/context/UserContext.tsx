import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Alert, Text, View } from "react-native";
import { axiosInstance } from "../utils/axios";
import axios from "axios";

export interface IPayment {
  userId: number;
  id: number;
  userReceived: string;
  debtValue: string;
  date: Date;
  paid: boolean;
}

interface IMetrics {
  wage: number;
  paymentValue: number;
  remaining: number;
  percentage: number;
}

interface IData {
  payment: IPayment;
  metrics: IMetrics;
  allPayments: IPayment[];
  load(): Promise<void>;
  unload(): void;
}

interface IProps {
  children: React.ReactElement;
}

export const UserContext = React.createContext<IData>({} as IData);

export const UserProvider: React.FunctionComponent<IProps> = ({
  children,
}: IProps) => {
  const { data } = useContext(AuthContext);
  const [paymentData, setPaymentData] = useState<IPayment>({} as IPayment);
  const [metricsData, setMetricsData] = useState<IMetrics>({} as IMetrics);
  const [allPayemnts, setAllPayments] = useState<IPayment[]>([]);

  const parsedDate = new Date()
    .toLocaleString("default", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replaceAll("/", "-");

  async function load() {
    if (data.id) {
      const fetchSinglePayment = await axiosInstance.get(
        `/users/${data.id}/payments/?date=${parsedDate}`,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      const fetchAllPayments = await axiosInstance.get(
        `/users/${data.id}/payments/`,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      if (
        fetchSinglePayment.status === 400 ||
        fetchAllPayments.status === 400
      ) {
        Alert.alert(
          "Sem dados para exibir",
          "Comece a cadastrar débitos para ver os dados"
        );
      } else if (
        fetchSinglePayment.status === 500 ||
        fetchAllPayments.status === 500
      ) {
        Alert.alert("Erro", "an error occoured");
      } else {
        setPaymentData(fetchSinglePayment.data.payment);
        setMetricsData(fetchSinglePayment.data.metrics);
        setAllPayments(fetchAllPayments.data);
      }
    }
    // if (error instanceof Error) {
    //   const message = error.message;
    //
    //   console.log(error);
    // }
  }

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, []);

  function unload() {
    setAllPayments([]);
    setMetricsData({} as IMetrics);
    setPaymentData({} as IPayment);
  }

  return (
    <UserContext.Provider
      value={{
        payment: paymentData,
        metrics: metricsData,
        allPayments: allPayemnts,
        load,
        unload,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
