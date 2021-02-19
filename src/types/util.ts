export type Page =
  | "chat"
  | "contacts"
  | "preferences"
  // right side panel in chat section
  | "chat-call"
  | "chat-search"
  | "chat-preferences";

export type PanelItem = {
  /// unique name
  name: string;
  icon: string;
  hover?: string;
  action: (isSelected: boolean) => void;
};
