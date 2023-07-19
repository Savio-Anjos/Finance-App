import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonMenu } from "./styles";

export default function Header() {
  const navigation = useNavigation();

  function openDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container>
      <ButtonMenu onPress={openDrawer}>
        <Icon name="menu" color="#FFF" size={30} />
      </ButtonMenu>
    </Container>
  );
}
