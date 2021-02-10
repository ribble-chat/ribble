import { atom } from "recoil";
import { Page } from "types/util";

export const activePageState = atom<Page | undefined>({
  key: "activePageState",
  default: "chat",
});

export const activeChatPageState = atom<Page | undefined>({
  key: "activeChatPageState",
  default: undefined,
});
