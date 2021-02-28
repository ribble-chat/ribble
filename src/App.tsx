import { useRecoilValue } from "recoil";
import { Main, Authentication } from "views";
import { userAtom } from "state";
import styles from "./App.module.scss";

function App() {
  const currentUser = useRecoilValue(userAtom);
  return (
    <div className={styles.container}>
      {currentUser ? <Main /> : <Authentication />}
    </div>
  );
}

export default App;
