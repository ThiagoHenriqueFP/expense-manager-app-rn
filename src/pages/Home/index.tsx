import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { DEFAULT_LIGTH_GREY, DEFAULT_WHITE } from "../../utils/colors";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Header } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
import StatsContainer from "../../components/StatsContainer";
import Carousel from "../../components/carousel";
import Options from "../../components/options";

interface NavigationProps {
  screen: string;
}

export default function Home() {
  const { data } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const userIcon = (
    <TouchableOpacity onPress={() => navigate("User", { screen: "Account" })}>
      <Icon name="user" size={75} color={"#F6C90E"} style={{ padding: 0 }} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.homeContainer}>
        <Header>
          <Text style={style.headerText}>Olá, {data.name}</Text>
          {userIcon}
        </Header>
        <StatsContainer />
        <Options />
        <Carousel />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  homeContainer: {
    backgroundColor: DEFAULT_LIGTH_GREY,
    flex: 1,
    alignItems: "center",
  },

  headerText: {
    color: DEFAULT_WHITE,
    fontSize: 24,
    fontWeight: "bold",
  },
});
