import { errorHandler } from "api";
import axios from "axios";
import { Group, Guid } from "types";
import { ApiError } from "types/api";
import { ok, Result } from "types/result";

export type CreateGroupRequest = {
  groupName: string;
  userIds: Guid[];
};

export async function createGroup(
  request: CreateGroupRequest
): Promise<Result<Group, ApiError>> {
  return axios
    .post("/api/chat/groups", request)
    .then<Result<Group, ApiError>>(({ data }) => ok(data))
    .catch(errorHandler);
}
