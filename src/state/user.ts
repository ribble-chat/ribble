import { atom } from "recoil";
import type { User, Group } from "types";

export const userState = atom<User | undefined>({
  key: "userState",
  default: undefined,
});

export const currentGroupState = atom<Group | undefined>({
  key: "currentGroupState",
  default: undefined,
});
