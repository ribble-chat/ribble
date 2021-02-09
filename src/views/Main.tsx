import { Chat } from "components/chat";
import { SidePanel } from "components/sidepanel";
import { useRecoilValue } from "recoil";
import { currentGroupState } from "state";
import styles from "./Main.module.scss";

const Main = () => {
  const group = useRecoilValue(currentGroupState);

  return (
    <div id={styles.container}>
      <SidePanel />
      {group ? <Chat /> : <section id={styles.background} />}
    </div>
  );
};

export default Main;
