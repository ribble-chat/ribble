import { useRecoilValue } from "recoil";
import { Main, Authentication } from "views";
import { userAtom } from "state";
import styles from "./App.module.scss";

function App() {
  const currentUser = useRecoilValue(userAtom);
  return (
    <div id={styles.container}>
      {currentUser ? <Main /> : <Authentication />}
    </div>
  );
}

export default App;
