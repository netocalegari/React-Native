import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

import Button from "@components/Button";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ListEmpty from "@components/ListEmpty";
import PlayerCard from "@components/PlayerCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { addPlayerByGroup } from "@storage/player/addPlayerByGroup";
import { getPlayerByGroupAndTeam } from "@storage/player/getPlayerByGroupAndTeam";
import { getPlayersByGroup } from "@storage/player/getPlayersByGroup";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { AppError } from "@utils/AppError";

import { Container, Form, HeaderList, PlayerCount } from "./style";

type RouteParams = {
  group: string;
};
export default function Players() {
  const [team, setTeam] = useState("team a");
  const [teams, setTeams] = useState(["team a", "team b"]);
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("New Player", "Please inform the player's name.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await addPlayerByGroup(newPlayer, group);
      fetchPlayersByTeam();
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("New Player", err.message);
      } else {
        Alert.alert(
          "New Player",
          "Error adding player to team. Please try again."
        );
        console.log(err);
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await getPlayerByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (err) {
      console.log(err);
      Alert.alert(
        "New Player",
        "Error loading players by team. Please try again."
      );
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Add people and separate the teams" />

      <Form>
        <Input
          placeholder="Participant name"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}}></PlayerCard>
        )}
        ListEmptyComponent={() => <ListEmpty message="No players found" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
