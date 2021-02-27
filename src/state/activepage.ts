import { ReactElement } from "react";
import { atom } from "recoil";
import { Page } from "types/util";

export const activePageAtom = atom<Page | undefined>({
  key: "activePage",
  default: "chat",
});

export const activeChatPageAtom = atom<Page | undefined>({
  key: "activeChatPage",
  default: undefined,
});

export const modalContentAtom = atom<ReactElement | undefined>({
  key: "modelContent",
  default: undefined,
});
