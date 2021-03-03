import type { TextInput } from "./Form";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userAtom } from "state";
import * as api from "api";
import formStyles from "./Form.module.scss";
import { renderTextInput } from "./Form";
import styles from "./Login.module.scss";
import { toast } from "react-toastify";
import { useLazyLoadQuery } from "react-relay/hooks";
import { useMutation } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginQuery = graphql`
    mutation LoginMutation($usernameOrEmail: String!, $password: String!) {
      login(usernameOrEmail: $usernameOrEmail, password: $password) {
        ... on LoginSuccess {
          user {
            id
            userName
            groups {
              id
              name
            }
          }
        }
        ... on LoginUnknownUserError {
          error
        }
        ... on LoginIncorrectPasswordError {
          error
        }
      }
    }
  `;

  const [mutate, { loading }] = useMutation(loginQuery, {
    onCompleted: console.log,
  });

  const randomQuery = graphql`
    query LoginQuery {
      users {
        userName
      }
    }
  `;
  const user = useLazyLoadQuery(randomQuery, {});
  console.log(user);

  const setCurrentUser = useSetRecoilState(userAtom);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // (await api.login(username, password)).map(setCurrentUser).mapErr(toast.error);
    mutate({ variables: { username, password } });
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
        {textInputs.map(renderTextInput)}
        <input className={formStyles.submitButton} value="LOG IN" type="submit" />
      </form>
    </main>
  );
};

export default Login;
export default Login;
