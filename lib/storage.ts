import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  NOTIFICATIONS: "notifications",
  THEME: "theme",
};

export const storage = {
  get: async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error(`Failed to get key "${key}":`, error);
      return null;
    }
  },

  set: async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`Failed to set key "${key}":`, error);
    }
  },

  remove: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove key "${key}":`, error);
    }
  },
};