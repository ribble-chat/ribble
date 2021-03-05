import { atom, selector, selectorFamily } from "recoil";
import type { User, GroupOverview } from "types";

export const currentUserAtom = atom<User>({
  key: "user",
  default: undefined!,
});

export const userGroupOverviewsAtom = selector<readonly GroupOverview[]>({
  key: "userGroupsOverview",
  get: ({ get }) => get(currentUserAtom).groups,
  set: ({ set }, value) =>
    // never going to reset the group state so should never be of type `DefaultValue`
    set(currentUserAtom, user => ({
      ...user,
      groups: value as GroupOverview[],
    })),
});

export const currentGroupAtom = atom<GroupOverview | undefined>({
  key: "currentGroup",
  default: undefined,
});
