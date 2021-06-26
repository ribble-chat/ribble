import { Result } from "./result";

// TODO proper error type
export type ApiError = ApiErrorMessage;
export type ApiResult<T> = Result<T, ApiError>;

export type ApiErrorMessage = string;
