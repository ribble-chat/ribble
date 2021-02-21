export type Result<T, E> = Ok<T, E> | Err<T, E>;

export class Ok<T, E> {
  constructor(public readonly value: T) { }

  isOk(): this is Ok<T, E> {
    return true;
  }

  isErr(): this is Err<T, E> {
    return false;
  }

  map<U>(f: (t: T) => U): Result<U, E> {
    return ok(f(this.value));
  }

  bind<U>(f: (t: T) => Result<U, E>): Result<U, E> {
    return f(this.value);
  }

  mapErr<U>(f: (t: E) => U): Result<T, U> {
    return ok(this.value);
  }
}

export class Err<T, E> {
  constructor(public readonly err: E) { }

  isOk(): this is Ok<T, E> {
    return false;
  }

  isErr(): this is Err<T, E> {
    return true;
  }

  map<U>(_: (t: T) => U): Result<U, E> {
    return error(this.err);
  }

  bind<U>(_: (t: T) => Result<U, E>): Result<U, E> {
    return error(this.err);
  }

  mapErr<U>(f: (t: E) => U): Result<T, U> {
    return error(f(this.err));
  }
}

export const error = <T, E>(err: E): Result<T, E> => new Err(err);
export const ok = <T, E>(ok: T): Result<T, E> => new Ok(ok);
