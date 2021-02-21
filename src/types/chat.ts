import { Guid } from "types";

export type Group = {
  id: Guid;
  name: string;
  userIds: number[];
  picture?: string;
};

export type Msg = {
  id: Guid;
  from: Guid;
  to: Guid;
  content: string;
  time?: number;
};
