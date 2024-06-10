import { useState } from "react";
import { Alert } from "react-native";

import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { createGroup } from "@storage/group/createGroup";
import { AppError } from "@utils/AppError";

import { Container, Content, Icon } from "./style";

export default function NewGroup() {
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert("New Group", "Insert the group's name");
      }

      await createGroup(groupName);
      navigation.navigate("groups");
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("New Group", err.message);
      } else {
        Alert.alert("New Group", "Error on group creation. Please try again.");
        console.log(err);
      }
    }
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
