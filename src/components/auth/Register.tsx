import { useState } from "react";
import styles from "./Register.module.scss";
import * as api from "api";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e: any) {
    e.preventDefault();
    api.register(email, username, firstname, lastname, password);
  }

  return (
    <form id={styles.registerForm} onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input id={styles.submitButton} type="submit" value="REGISTER" />
    </form>
  );
};

export default Register;
