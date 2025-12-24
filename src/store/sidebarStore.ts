import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarStore {
  isOpen: boolean;
  onOpen: (value: boolean) => void;
  onToggle: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      isOpen: false,
      onOpen: (value) => set(() => ({ isOpen: value })),
      onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "sidebar" }
  )
);
