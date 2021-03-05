import { Guid } from "types";

export type GroupDetails = GroupOverview & {
  readonly users: readonly UserOverview[];
};

export type UserOverview = {
  readonly id: string;
  readonly username: string;
  readonly email: string;
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
  readonly content: string;
};
