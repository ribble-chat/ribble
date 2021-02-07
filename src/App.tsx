import "./App.css";
import { Main } from "./views";
import styles from "./App.module.scss";

function App() {
  return (
    <div id={styles.container}>
      <Main />
    </div>
  );
}

export default App;
