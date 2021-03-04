import { useRecoilValue } from "recoil";
import { Main, Authentication } from "views";
import { currentUserAtom } from "state";
import styles from "./App.module.scss";

function App() {
  const currentUser = useRecoilValue(currentUserAtom);
  return (
    <div className={styles.container}>
      {currentUser ? <Main /> : <Authentication />}
    </div>
  );
}

export default App;
