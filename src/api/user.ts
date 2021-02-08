import axios from "axios";

export async function login(
  usernameOrEmail: string,
  password: string
): Promise<void> {}

export async function register(
  email: string,
  username: string,
  firstname: string,
  lastname: string,
  password: string
): Promise<any> {
  const data = post("/api/users", {
    email,
    username,
    firstname,
    lastname,
    password,
  });
  console.log(data);
}

async function post(url: string, data: any) {
  const response = await fetch(url, {
    method: "POST",
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
}
