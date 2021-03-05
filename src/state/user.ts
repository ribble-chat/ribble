import { atom } from "recoil";
import type { User, GroupOverview } from "types";

export const currentUserAtom = atom<User | undefined>({
  key: "user",
  default: undefined,
});

export const userGroupOverviewsAtom = atom<readonly GroupOverview[]>({
  key: "userGroupOverviews",
  default: [],
});

export const currentGroupAtom = atom<GroupOverview | undefined>({
  key: "currentGroup",
  default: undefined,
});
