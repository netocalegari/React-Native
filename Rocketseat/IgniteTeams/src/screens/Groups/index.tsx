import { useCallback, useState } from "react";
import { FlatList } from "react-native";

import Button from "@components/Button";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ListEmpty from "@components/ListEmpty";
import { LoadingIndicator } from "@components/Loading/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";

import { Container } from "./styles";

export default function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const fetchGroups = async () => {
    try {
      setIsLoading(true);

      const data = await getAllGroups();
      setGroups(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );
  return (
    <Container>
      <Header />
      <Highlight title="Teams" subTitle="Play with you team" />

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => <ListEmpty message="No groups found" />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button title="Add Team" onPress={handleNewGroup} />
    </Container>
  );
}
