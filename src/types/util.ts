import { ReactElement } from "react";

export type Page =
  | "chat"
  | "contacts"
  | "preferences"
  // right side panel in chat section
  | "chat-call"
  | "chat-search"
  | "chat-preferences";

export type UtilButton = {
  iconName: string;
  handleClick: () => void;
  component?: ReactElement;
  page?: Page;
  title?: string;
};
