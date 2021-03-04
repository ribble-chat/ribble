import type { TextInput } from "./Form";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userAtom } from "state";
import formStyles from "./Form.module.scss";
import { renderTextInput } from "./Form";
import styles from "./Login.module.scss";
import { Loading } from "components";
import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { LoginMutation } from "./__generated__/LoginMutation.graphql";

const Login: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const [commit, isLoading] = useMutation<LoginMutation>(
    graphql`
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
    `
  );

  const setCurrentUser = useSetRecoilState(userAtom);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // (await api.login(username, password)).map(setCurrentUser).mapErr(toast.error);
    commit({ variables: { usernameOrEmail, password }, onCompleted: res => console.log(res) });
  }

  const textInputs: TextInput[] = [
    {
      title: "Username / Email",
      value: usernameOrEmail,
      inputType: "text",
      handleChange: e => setUsernameOrEmail(e.target.value),
    },
    {
      title: "Password",
      value: password,
      inputType: "password",
      handleChange: e => setPassword(e.target.value),
    },
  ];

  if (isLoading) return <Loading />;

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
