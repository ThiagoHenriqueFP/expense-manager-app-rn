import React, { useContext, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  BtnText,
  Container,
  HeaderContainer,
  HeaderText,
  InfoContainer,
  LogoutBtn,
  PhotoContainer,
  Separator,
} from "./styled";
import {
  DefaultBtn,
  DefaultText,
  DefaultTextField,
} from "../../utils/defaultStyles";
import { AuthContext } from "../../context/AuthContext";
import Icon from "react-native-vector-icons/EvilIcons";
import { DEFAULT_DARK_GREY, DEFAULT_WHITE } from "../../utils/colors";
import { axiosInstance } from "../../utils/axios";
import { useNavigation } from "@react-navigation/native";

export default function Account() {
  const { data, logout } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [wage, setWage] = useState(data.wage.toString());
  const { navigate } = useNavigation<any>();

  const userIcon = (
    <Icon name="user" size={150} color={"#F6C90E"} style={{ padding: 0 }} />
  );

  function handleEditMode(value: boolean) {
    setEditMode(value);
  }

  async function handleSave() {
    try {
      const body = {
        name,
        email,
        wage,
      };
      await axiosInstance.patch(`/users/${data.id}`, body);

      handleEditMode(false);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("error", error.message);
        console.log(error);
      }
    }
  }

  function handleLogout() {
    logout();
    navigate("Login");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: DEFAULT_DARK_GREY }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HeaderContainer>
          <HeaderText>Informações da conta</HeaderText>
        </HeaderContainer>
        <Container>
          {/* <InfoContainer> */}
          <PhotoContainer>{userIcon}</PhotoContainer>
          {/* <Separator> */}
          <DefaultTextField
            style={{ fontSize: 16 }}
            editable={editMode}
            value={name}
            onChangeText={setName}
          />
          <DefaultTextField
            style={{ fontSize: 16 }}
            editable={editMode}
            value={email}
            onChangeText={setEmail}
          />
          <DefaultTextField
            style={{ fontSize: 16 }}
            editable={editMode}
            value={wage}
            onChangeText={setWage}
            keyboardType="number-pad"
          />
          {/* </Separator> */}
          {/* </InfoContainer> */}

          {editMode ? (
            <>
              <DefaultBtn onPress={handleSave}>
                <BtnText>Salvar informações</BtnText>
              </DefaultBtn>
              <DefaultBtn
                onPress={() => handleEditMode(false)}
                style={{ backgroundColor: "#ff0f0f", marginTop: 12 }}
              >
                <BtnText style={{ color: DEFAULT_WHITE }}>Cancelar</BtnText>
              </DefaultBtn>
            </>
          ) : (
            <DefaultBtn onPress={() => handleEditMode(true)}>
              <BtnText>Editar informações</BtnText>
            </DefaultBtn>
          )}
        </Container>
      </ScrollView>
      <LogoutBtn onPress={handleLogout}>
        <DefaultText style={{ fontSize: 20 }}>Logout</DefaultText>
      </LogoutBtn>
    </SafeAreaView>
  );
}
