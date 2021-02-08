import "./App.css";
import { Main, Authentication } from "views";
import styles from "./App.module.scss";
import { useRecoilValue } from "recoil";
import { userState } from "state";

function App() {
  //const [count, setCount] = useState<number>(0);
  //function handleClick() {
  //setCount((count) => count + 1);
  //console.log(count);
  //}
  const currentUser = useRecoilValue(userState);
  return (
    <div id={styles.container}>
      {currentUser ? <Main /> : <Authentication />}
    </div>
  );
}

export default App;
