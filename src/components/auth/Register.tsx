import { useState } from "react";

import * as api from "api";

import styles from "./Register.module.scss";
import formStyles from "./Form.module.scss";
import { toast } from "react-toastify";
import PasswordStrengthBar from "react-password-strength-bar";

type TextInput = {
  title: string;
  value: string;
  inputType: string;
  handleChange: (e: any) => void;
};

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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
      title: "First Name",
      value: firstname,
      inputType: "text",
      handleChange: e => setFirstname(e.target.value),
    },
    {
      title: "Last Name",
      value: lastname,
      inputType: "text",
      handleChange: e => setLastname(e.target.value),
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
    (await api.register({ email, username, firstname, lastname, password }))
      .map(user => toast.success(`Created user '${user.username}'`))
      .mapErr(toast.error);
  }

  // server does further validation, but could do more here also
  function isValid(): boolean {
    return score > 2 && password === confirmedPassword;
  }

  function formItem(item: TextInput) {
    const { title, value, inputType, handleChange } = item;
    return (
      <section key={title} className={styles.formItem}>
        <label>{title}</label>
        <input
          type={inputType}
          placeholder={title}
          value={value}
          onChange={handleChange}
        />
      </section>
    );
  }

  return (
    <form className={formStyles.form} onSubmit={handleRegister}>
      {textInputs.map(textInput => formItem(textInput))}

      <PasswordStrengthBar password={password} onChangeScore={setScore} />

      {formItem(confirmPasswordInput)}

      <input
        className={`${formStyles.submitButton} ${styles.submitButton}`}
        disabled={!isValid()}
        type="submit"
        value="REGISTER"
      />
    </form>
  );
};

export default Register;
