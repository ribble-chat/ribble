import { atom } from "recoil";
import type { User, Group } from "types";

export const USER_STATE: string = "userState";
export const GROUP_STATE: string = "groupState";

export const userState = atom<User | undefined>({
  key: USER_STATE,
  default: { name: "Jennifer", id: 1 },
});

export const groupState = atom<Group | undefined>({
  key: GROUP_STATE,
  default: { name: "group 1", picture: "nibbles.png", id: 1 },
});
