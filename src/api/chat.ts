import { errorHandler } from "api";
import axios from "axios";
import { ApiResult } from "types/api";
import { Group, Guid } from "types";
import { ok } from "types/result";

export type CreateGroupRequest = {
  groupName: string;
  userIds: Guid[];
};

export async function createGroup(request: CreateGroupRequest): Promise<ApiResult<Group>> {
  return axios
    .post("/api/chat/groups", request)
    .then<ApiResult<Group>>(({ data }) => ok(data))
    .catch(errorHandler);
}
