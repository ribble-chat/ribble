import { Guid } from "types";
import { GroupOverview } from "./chat";

export type User = {
  readonly id: Guid;
  readonly username: string;
  readonly email: string;
  readonly groups: readonly GroupOverview[];
};
