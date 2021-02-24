import { useState } from "react";

import * as api from "api";

import styles from "./Register.module.scss";
import formStyles from "./Form.module.scss";
import { toast } from "react-toastify";
import PasswordStrengthBar from "react-password-strength-bar";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [score, setScore] = useState(0);

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

  return (
    <form className={formStyles.form} onSubmit={handleRegister}>
      <section className={styles.formItem}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </section>
      <section className={styles.formItem}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </section>
      <section className={styles.formItem}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={e => setFirstName(e.target.value)}
        />
      </section>
      <section className={styles.formItem}>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={e => setLastName(e.target.value)}
        />
      </section>
      <section className={styles.formItem}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </section>
      <PasswordStrengthBar password={password} onChangeScore={setScore} />
      <section className={styles.formItem}>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmedPassword}
          onChange={e => setConfirmedPassword(e.target.value)}
        />
      </section>
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
