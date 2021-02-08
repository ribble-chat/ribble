import axios from "axios";

export async function login(usernameOrEmail: string, password: string) {
  try {
    const response = await axios.post("/api/users");
    console.log(response);
  } catch (err) {
    console.log(err);
  }

  axios
    .post("/api/auth", {
      usernameOrEmail,
      password,
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
}

export async function register(
  email: string,
  username: string,
  firstname: string,
  lastname: string,
  password: string
): Promise<any> {}
