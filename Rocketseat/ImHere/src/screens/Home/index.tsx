import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Participant from "../../components/Participant";
import styles from "./styles";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const date = `${dd}/${mm}/${yyyy}`;

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert("Error", "Participant already registered");
    }
    setParticipants([...participants, participantName]);
    setParticipantName("");
  };

  const handleParticipantRemove = (name: string) => {
    const remainingPartincipants = participants.filter(
      (participant) => participant !== name
    );

    Alert.alert("Remove", `Remove ${name} from list?`, [
      {
        text: "Yes",
        onPress: () => setParticipants([...remainingPartincipants]),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>{date}</Text>

      <View style={styles.form}>
        <TextInput
          onChangeText={setParticipantName}
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor={"#6B6B6B"}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participant) => participant}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No participants found</Text>
        )}
      />
    </View>
  );
}
