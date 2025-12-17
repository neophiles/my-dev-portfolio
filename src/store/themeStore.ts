import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  setIsDark: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: false,
      setIsDark: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: "theme" }
  )
);
