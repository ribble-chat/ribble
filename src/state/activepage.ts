import { atom } from "recoil";
import { MainPage } from "types/util";

export const activePageState = atom<MainPage | undefined>({
  key: "activePageState",
  default: "chat",
});
