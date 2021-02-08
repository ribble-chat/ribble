import axios from "axios";

export async function login(usernameOrEmail: string, password: string) {
  axios
    .post("/api/users", {
      usernameOrEmail,
      password,
    })
    .then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
}

export async function register(
  email: string,
  username: string,
  firstname: string,
  lastname: string,
  password: string
): Promise<any> {}
