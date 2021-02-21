import { Guid } from "types";

export type Group = {
  id: Guid;
  name: string;
  userIds: number[];
  picture?: string;
};

export type Msg = {
  id: Guid;
  authorId: Guid;
  authorName: string;
  groupId: Guid;
  content: string;
  timestamp: Date;
};
