import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../static/Types";
import { UserRole } from "../GraphQL/Users/Queries";
import { Accesses, AccessesEnum } from "../static/Accesses";

interface UserStore {
  user: {
    userName: string;
    id: string;
    fullName: string;
    nationalCode: string;
    phoneNumber: string;
    userRoles?: UserRole[];
    userType?: "INDIVIDUAL" | "ORGANIZATION";
    parent?: User | null;
  };
  token: string;
  expireDate: Date;
  accesses: string[];
  isMailRoom: boolean;
  setAccesses: (newAccesses: string[]) => void;
  setUser: (user: User, token: string, expireDate: Date) => void;
  setIsMailRoom: (isMailRoom: boolean) => void;
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
      isMailRoom: false,
      expireDate: new Date(),
      accesses: [AccessesEnum.HOME, AccessesEnum.COMPLAINTS],
      setUser: (user: User, token: string, expireDate: Date) => {
        set({ user: user, token: token, expireDate: expireDate });
      },
      setAccesses: (newAccesses: string[]) => {
        set({
          accesses: [
            ...newAccesses,
            AccessesEnum.HOME,
            AccessesEnum.COMPLAINTS,
          ],
        });
      },
      setIsMailRoom: (isMailRoom: boolean) => {
        set({ isMailRoom: isMailRoom });
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
          expireDate: new Date(),
          accesses: [AccessesEnum.HOME, AccessesEnum.COMPLAINTS],
          isMailRoom: false,
        });
      },
    }),
    {
      name: "user-store",
    }
  )
);
