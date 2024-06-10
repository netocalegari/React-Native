import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { getAllGroups } from "./getAllGroups";

export async function removeGroupByName(group: string) {
  try {
    const storedGroups = await getAllGroups();
    const groups = storedGroups.filter((g) => g !== group);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (err) {
    throw err;
  }
}
