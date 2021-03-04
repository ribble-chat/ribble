import { Guid } from "types";

export type GroupDetails = GroupOverview & {
  readonly userIds: number[];
};

export type GroupOverview = {
  readonly id: Guid;
  readonly name: string;
  readonly picture?: string;
};

export type Msg = {
  readonly id: Guid;
  readonly authorId: Guid;
  readonly authorName: string;
  readonly groupId: Guid;
  readonly timestamp: Date;
  content: string;
};
