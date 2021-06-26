import axios from "axios";
import { User } from "types";
import { ApiError } from "types/api";
import { ok, Result } from "types/result";
import { ApiResult, errorHandler } from ".";

export async function login(
  usernameOrEmail: string,
  password: string
): Promise<ApiResult<User>> {
  return axios
    .post("/api/auth", {
      usernameOrEmail,
      password,
    })
    .then<ApiResult<User>>(res => ok(res.data))
    .catch(errorHandler);
}

type RegisterUserInfo = {
  email: string;
  username: string;
  password: string;
};

export async function register(
  registerInfo: RegisterUserInfo
): Promise<Result<User, ApiError>> {
  return axios
    .post("/api/users", registerInfo)
    .then<Result<User, ApiError>>(res => ok(res.data))
    .catch(errorHandler);
}
