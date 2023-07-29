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
  setUser: (user: User,token:string) => void;
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
                id: '',
            },
            token: "",
            setUser: (user: User,token : string) => {
                set({ user: user, token: token });
            }
            ,
            logout: () => {
                set({
                    user: {
                        userName: "",
                        id: '',
                        firstName: "",
                        lastName: "",
                        nationalCode: "",
                        personnelCode: "",
                        departmentId: 0,
                        phoneNumber: "",
                    },
                    token: "",
                });
            }
        }),
      {
        name: "user-store",
      },
    ),
  );
