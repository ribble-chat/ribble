import { SidePanel, Chat } from "../components";
import { useRecoilValue } from "recoil";
import { groupState } from "../recoil";
import styles from "./Main.module.scss";

const Main = () => {
  const group = useRecoilValue(groupState);

  return (
    <div id={styles.container}>
      <SidePanel />
      {group ? <Chat /> : <section id={styles.background} />}
    </div>
  );
};

export default Main;
