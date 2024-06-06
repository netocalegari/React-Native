import Header from "@components/Header";
import { Container, Form, HeaderList, PlayerCount } from "./style";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export default function Players() {
  const [team, setTeam] = useState("time a");
  const [teams, setTeams] = useState(["time a", "time b"]);
  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Team Name"
        subTitle="Add people and separate the teams"
      />
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
    </Container>
  );
}
