import { View, Text, Button, StyleSheet } from "react-native";

// Usando PROP navigation

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate("About", {
            name: "Neto",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
