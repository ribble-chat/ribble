import { Group, Guid } from "types";

export type User = {
  id: Guid;
  firstname: string,
  lastname: string
  username: string,
  email: string,
  groups: Group[];
};

