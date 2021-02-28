import { Group, Guid } from "types";

export type User = {
  id: Guid;
  username: string;
  email: string;
  groups: Group[];
};
