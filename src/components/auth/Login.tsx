import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { userAtom } from "state";
import * as api from "api";

import formStyles from "./Form.module.scss";
import styles from "./Login.module.scss";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setCurrentUser = useSetRecoilState(userAtom);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (await api.login(username, password))
      .map(setCurrentUser)
      .mapErr(toast.error);
  }

  return (
    <main>
      <form className={formStyles.form} onSubmit={handleLogin}>
        <input
          className={styles.formInput}
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username/Email"
        />
        <input
          className={styles.formInput}
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          className={`${formStyles.submitButton} ${styles.formInput}`}
          value="LOG IN"
          type="submit"
        />
      </form>
    </main>
  );
};

export default Login;
