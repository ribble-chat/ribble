import { atom } from "recoil";
import type { User, Group } from "types";

export const USER_STATE: string = "userState";
export const GROUP_STATE: string = "groupState";

export const userState = atom<User | undefined>({
  key: USER_STATE,
  default: undefined,
});

export const groupState = atom<Group | undefined>({
  key: GROUP_STATE,
  default: undefined,
});
