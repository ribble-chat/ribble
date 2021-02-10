import { useRecoilValue } from "recoil";
import { Main, Authentication } from "views";
import { userState } from "state";

import styles from "./App.module.scss";

function App() {
  const currentUser = useRecoilValue(userState);
  return (
    <div id={styles.container}>
      {currentUser ? <Main /> : <Authentication />}
    </div>
  );
}

export default App;
