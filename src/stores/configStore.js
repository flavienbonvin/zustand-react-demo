import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  darkTheme: false,
  setDarkTheme: (darkTheme) => set({ darkTheme }),
});

const configStore = create(persist(store));

export default configStore;
