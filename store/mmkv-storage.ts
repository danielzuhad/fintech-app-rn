import { StateStorage } from "zustand/middleware";

import { MMKV } from "react-native-mmkv";

const storage = new MMKV({
  id: "balance-storage",
});

export const zustandStorage: StateStorage = {
  setItem(name, value) {
    return storage.set(name, value);
  },
  getItem(name) {
    return storage.getString(name) ?? null;
  },
  removeItem(name) {
    return storage.delete(name);
  },
};
