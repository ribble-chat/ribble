import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { userAtom } from "state";
import * as api from "api";

import formStyles from "./Form.module.scss";
import type { TextInput } from "./Form";
import { formItem } from "./Form";
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

  const textInputs: TextInput[] = [
    {
      title: "Username / Email",
      value: username,
      inputType: "text",
      handleChange: e => setUsername(e.target.value),
    },
    {
      title: "Password",
      value: password,
      inputType: "password",
      handleChange: e => setPassword(e.target.value),
    },
  ];

  return (
    <main className={styles.container}>
      <form className={formStyles.form} onSubmit={handleLogin}>
        {textInputs.map(textInput => formItem(textInput))}
        <input
          className={formStyles.submitButton}
          value="LOG IN"
          type="submit"
        />
      </form>
    </main>
  );
};

export default Login;
