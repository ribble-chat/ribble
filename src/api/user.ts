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

type RegisterUserInfo = {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
};

export async function register(registerInfo: RegisterUserInfo) {
  axios.post("/api/users", registerInfo).then(res => console.log(res.data)).catch(console.log);
}
