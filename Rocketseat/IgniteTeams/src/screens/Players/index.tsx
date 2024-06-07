import { useState } from "react";
import { FlatList } from "react-native";

import Button from "@components/Button";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ListEmpty from "@components/ListEmpty";
import PlayerCard from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, PlayerCount } from "./style";

type RouteParams = {
  group: string;
};
export default function Players() {
  const [team, setTeam] = useState("time a");
  const [teams, setTeams] = useState(["time a", "time b"]);
  const [players, setPlayers] = useState([
    // "Rodrigo",
    // "Neto",
    // "Caio",
    // "Giovana",
    // "Vinicius",
    // "Anakin",
    // "Romeu",
    // "Lia",
    // "Luke",
    // "Carlos",
    // "Miguel",
    // "Hailey",
  ]);

  const route = useRoute();
  const { group } = route.params as RouteParams;
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Add people and separate the teams" />

      <Form>
        <Input placeholder="Participant name" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <PlayerCount>{players.length}</PlayerCount>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}}></PlayerCard>
        )}
        ListEmptyComponent={() => <ListEmpty message="No players found" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
