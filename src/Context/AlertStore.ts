import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AlertStore {
  alertOpen: boolean;
  alertType: "success" | "error" | "info" | "warning";
  alertMessage: string;
  setAlertOpen: (alertOpen: boolean) => void;
  setAlertMessage: (alertMessage: string) => void;
  setAlertType: (
    alertType: "success" | "error" | "info" | "warning"
  ) => void;
}

export const useAlertStore = create<AlertStore>()(
  persist((set) => ({
    alertOpen: false,
    alertMessage: "",
    alertType: "success",
    setAlertOpen: (alertOpen) => {
      set({
        alertOpen: alertOpen,
      });
    },
    setAlertMessage: (alertMessage) => {
      set({
        alertMessage: alertMessage,
      });
    },
    setAlertType: (alertType) => {
      set({
        alertType: alertType,
      });
    },
  }), {
    name: "alert-store",
  })
);
