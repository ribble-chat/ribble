import { atom } from "recoil";
import type { User, Group } from "types";

export const userAtom = atom<User | undefined>({
  key: "user",
  default: undefined,
});

export const currentGroupAtom = atom<Group | undefined>({
  key: "currentGroup",
  default: undefined,
});
