import axios from "axios";

export async function login(usernameOrEmail: string, password: string) {
  try {
    const response = await axios.post("/api/auth", {
      usernameOrEmail,
      password,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

type RegisterInfo = {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

export async function register(registerInfo: RegisterInfo) {
  try {
    const response = await axios.post("/api/users", registerInfo);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
