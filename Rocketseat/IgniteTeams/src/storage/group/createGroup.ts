import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

import { getAllGroups } from "./getAllGroups";

export async function createGroup(groupName: string) {
  try {
    const storedGroups = await getAllGroups();

    const groupExists = storedGroups.includes(groupName);

    if (groupExists) {
      throw new AppError("Group already exists");
    }

    const storage = JSON.stringify([...storedGroups, groupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (err) {
    throw err;
  }
}
