import axios from "axios";

export type CreateGroupRequest = {
  name: string;
  userIds: number[];
};

export async function createGroup(request: CreateGroupRequest): Promise<void> {
  axios.post("/api/chat/groups", request);
}
