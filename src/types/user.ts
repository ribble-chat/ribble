import { Guid } from "types";

export type User = {
  readonly id: Guid;
  readonly username: string;
  readonly email: string;
};
