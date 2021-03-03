import { useState } from "react";
import * as api from "api";
import styles from "./Register.module.scss";
import formStyles from "./Form.module.scss";
import { toast } from "react-toastify";
import type { TextInput } from "./Form";
import { renderTextInput } from "./Form";
import PasswordStrengthBar from "react-password-strength-bar";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [score, setScore] = useState(0);

  const textInputs: TextInput[] = [
    {
      title: "Email",
      value: email,
      inputType: "text",
      handleChange: e => setEmail(e.target.value),
    },
    {
      title: "Username",
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

  const confirmPasswordInput: TextInput = {
    title: "Confirm Password",
    value: confirmedPassword,
    inputType: "password",
    handleChange: e => setConfirmedPassword(e.target.value),
  };

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (await api.register({ email, username, password }))
      .map(user => toast.success(`Created user '${user.username}'`))
      .mapErr(toast.error);
  }

  // server does further validation, but could do more here also
  function isValid(): boolean {
    return score > 2 && password === confirmedPassword;
  }

  return (
    <main className={styles.container}>
      <form className={formStyles.form} onSubmit={handleRegister}>
        {textInputs.map(renderTextInput)}

        <PasswordStrengthBar password={password} onChangeScore={setScore} />

        {renderTextInput(confirmPasswordInput)}

        <input
          className={formStyles.submitButton}
          disabled={!isValid()}
          type="submit"
          value="REGISTER"
        />
      </form>
    </main>
  );
};

export default Register;
