import type { TextInput } from "./Form";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserAtom } from "state";
import formStyles from "./Form.module.scss";
import { renderTextInput } from "./Form";
import styles from "./Login.module.scss";
import { Loading } from "components";
import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { LoginMutation, LoginMutationResponse } from "./__generated__/LoginMutation.graphql";
import { PayloadError } from "relay-runtime";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const setUser = useSetRecoilState(currentUserAtom);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const [commit, isLoading] = useMutation<LoginMutation>(
    graphql`
      mutation LoginMutation($usernameOrEmail: String!, $password: String!) {
        login(usernameOrEmail: $usernameOrEmail, password: $password) {
          ... on LoginSuccess {
            __typename
            user {
              id
              username
              email
              groups {
                id
                name
              }
            }
          }
          ... on LoginUnknownUserError {
            __typename
            error
          }
          ... on LoginIncorrectPasswordError {
            __typename
            error
          }
        }
      }
    `
  );

  function handleLoginResponse(res: LoginMutationResponse, _errors: PayloadError[]) {
    switch (res.login.__typename) {
      case "LoginSuccess":
        return setUser(res.login.user);
      case "LoginUnknownUserError":
        return void toast.error(`Unknown username or email ${usernameOrEmail}`);
      case "LoginIncorrectPasswordError":
        return void toast.error("Incorrect Password");
    }
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // (await api.login(username, password)).map(setCurrentUser).mapErr(toast.error);
    commit({ variables: { usernameOrEmail, password }, onCompleted: handleLoginResponse });
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
