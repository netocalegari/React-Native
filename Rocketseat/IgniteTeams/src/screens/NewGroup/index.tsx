import { useState } from "react";

import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./style";

export default function NewGroup() {
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("players", { group: groupName });
  };
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="New Team"
          subTitle="Create a new team to add other people"
        />

        <Input placeholder="Name" onChangeText={setGroupName} />

        <Button title="Create" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
