import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import PokemonCard from "./components/PokemonCards";
import CharmanderImg from "./assets/charmander.png";
import BulbasaurImg from "./assets/bulbasaur.png";
import PikachuImg from "./assets/pikachu.png";
import SquirtleImg from "./assets/squirtle.png";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: CharmanderImg,
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: SquirtleImg,
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };
  const bulbasaurData = {
    name: "Bulbasaur",
    image: BulbasaurImg,
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vinw Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };
  const pikachuData = {
    name: "Pikachu",
    image: PikachuImg,
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <SafeAreaView>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...pikachuData} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc0303",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
