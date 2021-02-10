import { useRecoilValue } from "recoil";
import { currentGroupState } from "state";

import GroupsPanel from "./GroupsPanel";
import MenuBar from "./MenuBar";
import ChatBox from "./ChatBox";
import ChatBar from "./ChatBar";

import styles from "./Chat.module.scss";

const Chat: React.FC = () => {
  const currentGroup = useRecoilValue(currentGroupState);

  return (
    <article id={styles.container}>
      <GroupsPanel />
      {currentGroup ? (
        <div id={styles.chatContainer}>
          <MenuBar />
          <ChatBox />
          <ChatBar />
        </div>
      ) : (
          <section id={styles.background} />
        )}
    </article>
  );
};

export default Chat;
