import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { userState } from "state";
import * as api from "api";

import styles from "./Login.module.scss";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setCurrentUser = useSetRecoilState(userState);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (await api.login(username, password)).map(setCurrentUser).mapErr(toast.error);
  }

  return (
    <main>
      <form id={styles.loginForm} onSubmit={handleLogin}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username/Email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input id={styles.submitButton} value="LOG IN" type="submit" />
      </form>
    </main>
  );
};

export default Login;
