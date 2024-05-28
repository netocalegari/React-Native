import { View, Text, Button, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";

export default function AboutScreen({ route, navigation }) {
  // const navigation = useNavigation(); // navigationHook
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
      <Button
        title="Update name"
        onPress={() =>
          navigation.setParams({
            name: "SOCORRO",
          })
        }
      />
      <Button
        title="Send data back"
        onPress={() =>
          navigation.navigate("Home", {
            result: `Data from about screen: ${name}`,
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
