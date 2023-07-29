import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../assets/static/Types";

interface UserStore {
  user: {
    userName: string;
    id: string;
    firstName: string;
    lastName: string;
    nationalCode: string;
    personnelCode: string;
    departmentId: number;
    phoneNumber: string;
  };
  token: string;
  expireDate: Date;
  setUser: (user: User, token: string, expireDate: Date) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: {
        userName: "",
        firstName: "",
        lastName: "",
        nationalCode: "",
        personnelCode: "",
        departmentId: 0,
        phoneNumber: "",
        id: "",
      },
      token: "",
      expireDate: new Date(),
      setUser: (user: User, token: string, expireDate: Date) => {
        set({ user: user, token: token, expireDate: expireDate });
      },
      logout: () => {
        set({
          user: {
            userName: "",
            id: "",
            firstName: "",
            lastName: "",
            nationalCode: "",
            personnelCode: "",
            departmentId: 0,
            phoneNumber: "",
          },
          token: "",
        });
      },
    }),
    {
      name: "user-store",
    }
  )
);
