import { SidePanel, Chat } from "../components";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div id={styles.container}>
      <SidePanel />
      <Chat />
    </div>
  );
};

export default Main;
