import "./App.css";
import { Main } from "./views";
import styles from "./App.module.scss";

function App() {
  //const [count, setCount] = useState<number>(0);
  //function handleClick() {
  //setCount((count) => count + 1);
  //console.log(count);
  //}
  return (
    <div id={styles.container}>
      <Main />
    </div>
  );
}

export default App;
