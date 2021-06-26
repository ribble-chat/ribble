import { AxiosError } from "axios";
import { ApiError } from "types/api";
import { Err, Result } from "types/result";

export * from "./chat";
export * from "./chathub";
export * from "./user";

export type ApiResult<T> = Result<T, ApiError>;

export function errorHandler(err: AxiosError): Result<any, ApiError> {
  // TODO do some error translation from AxiosError to our own error type
  console.error(err.response);
  const data = err.response?.data;
  if (!data) return new Err("Unknown error occurred, server may not be currently available");

  // TODO server returns are not yet consistent so handle a bunch of potential cases for now
  if (data.details) return new Err(data.details);
  else if (data.description) return new Err(data.description);
  else if (typeof data === "string") return new Err(data);
  return new Err("unknown error format");
}
