import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../static/Types";
import { UserRole } from "../GraphQL/Users/Queries";

interface UserStore {
  user: {
    userName: string;
    id: string;
    fullName: string;
    nationalCode: string;
    phoneNumber: string;
    userRoles?: UserRole[];
  };
  token: string;
  expireDate: Date;
  setUser: (user: User, token: string, expireDate: Date) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        userName: "",
        fullName: "",
        nationalCode: "",
        phoneNumber: "",
        id: "",
        userRole: "",
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
            fullName: "",
            nationalCode: "",
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
