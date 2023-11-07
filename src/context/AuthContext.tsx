import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userData = "@exp-mng:user";

interface IUser {
  id: number;
  name: string;
  email: string;
  wage: number;
}

interface ICredentials {
  username: string;
  password: string;
}

interface IAuthContext {
  data: IUser;
  signIn(credentials: ICredentials): Promise<boolean>;
  logout(): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext
);

export const AuthProvider: React.FunctionComponent<IProps> = ({
  children,
}: IProps) => {
  const [data, setData] = useState<IUser>({} as IUser);

  useEffect(() => {
    async function loadData() {
      const user = await AsyncStorage.getItem(userData);

      if (user) {
        setData(JSON.parse(user));
      }
    }

    loadData();
  }, []);

  async function signIn({
    password,
    username,
  }: ICredentials): Promise<boolean> {
    try {
      const response = await axiosInstance.post("/login", {
        username: username,
        password: password,
      });

      const user: IUser = response.data;

      AsyncStorage.setItem(userData, JSON.stringify(user));
      setData(user);

      return true;
    } catch (err) {
      console.log(err);
      Alert.alert("Error to login", "An error occoured");
      return false;
    }
  }

  async function logout() {
    await AsyncStorage.setItem(userData, "");
  }

  return (
    <AuthContext.Provider value={{ data, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
