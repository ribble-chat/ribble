import axios from "axios";
import { Group } from "types";
import { ok, error, Result } from "types/result";

export type CreateGroupRequest = {
  groupName: string;
  userIds: number[];
};

// TODO proper error type
type ApiError = {};

export async function createGroup(
  request: CreateGroupRequest
): Promise<Result<Group, ApiError>> {
  return axios
    .post("/api/chat/groups", request)
    .then<Result<Group, ApiError>>(({ data }) => ok(data))
    .catch(err => error({}));
}
