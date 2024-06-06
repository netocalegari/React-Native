import { useState } from "react";

import Header from "@components/Header";
import { Container } from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    // "Chonk Bois",
    // "BigChungusses",
    // "Evil Bunnies",
  ]);
  return (
    <Container>
      <Header />
      <Highlight title="Teams" subTitle="Play with you team" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message="No groups found" />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button title="Add Team" />
    </Container>
  );
}
