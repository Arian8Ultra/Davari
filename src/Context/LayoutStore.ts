import { create } from "zustand";
import { persist } from "zustand/middleware";
interface LayoutStore {
  pageTitle: string;
  location: string;
  setPageTitle: (pageTitle: string) => void;
  setLocation: (location: string) => void;
}

const useLayoutStore = create<LayoutStore>()(
  persist(
    (set) => ({
      pageTitle: "",
      location: "",
      setPageTitle: (pageTitle) => set({ pageTitle }),
      setLocation: (location) => set({ location }),
    }),
    {
      name: "layout-store",
    },
  ),
);

export default useLayoutStore;
