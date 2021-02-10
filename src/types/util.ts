import { ReactElement } from "react";

export type MainPage = "chat" | "contacts" | "preferences" | undefined;

export type UtilButton = {
  page: MainPage;
  iconName: string;
  handleClick: () => void;
  component: ReactElement | undefined;
};
