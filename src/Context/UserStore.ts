import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserRole } from "../GraphQL/Users/Queries";
import { AccessesEnum } from "../static/Accesses";
import { User } from "../static/Types";

interface UserStore {
  user: {
    userName: string;
    id: string;
    fullName: string;
    nationalCode: string;
    phoneNumber: string;
    userRoles?: UserRole[];
    userType?:
      | "INDIVIDUAL"
      | "ORGANIZATION"
      | "CONTRACTOR_OR_CONSULTANT";
    parent?: User | null;
    parentId?: string;
    isJury: boolean;
    email?: string;
  };
  token: string;
  expireDate: Date;
  accesses: string[];
  isMailRoom: boolean;
  isJury: boolean;
  setAccesses: (newAccesses: string[]) => void;
  setUser: (user: User, token: string, expireDate: Date) => void;
  setIsMailRoom: (isMailRoom: boolean) => void;
  setJury: (isJury: boolean) => void;
  clearToken: () => void;
  logout: () => void;
  logedOut: boolean;
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
        userType: "INDIVIDUAL",
        isJury: false,
      },
      token: "",
      isMailRoom: false,
      expireDate: new Date(),
      accesses: [AccessesEnum.HOME, AccessesEnum.COMPLAINTS],
      isJury: false,
      logedOut: false,
      setUser: (user: User, token: string, expireDate: Date) => {
        set({ user: user, token: token, expireDate: expireDate});
        set({ logedOut: false });
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
      setJury(isJury) {
        set({ isJury });
      },
      clearToken: () => {
        set({ token: "", expireDate: new Date() });
      },
      logout: () => {
        set({
          user: {
            userName: "",
            id: "",
            fullName: "",
            nationalCode: "",
            phoneNumber: "",
            userRoles: [],
            userType: "INDIVIDUAL",
            parent: null,
            isJury: false,
          },
          token: "",
          expireDate: new Date(),
          accesses: [AccessesEnum.HOME, AccessesEnum.COMPLAINTS],
          isMailRoom: false,
          isJury: false,
          logedOut: true,
        });
      },
    }),
    {
      name: "user-store",
    }
  )
);
