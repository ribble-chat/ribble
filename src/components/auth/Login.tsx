import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "state";
import * as api from "api";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [currentUser, setUser] = useRecoilState(userState);

  function handleLogin(e: any) {
    e.preventDefault();
    api.login(username, password);
    setUser({ name: "Jennifer", id: 1 });
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
