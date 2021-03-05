import MenuBar from "./MenuBar";
import ChatBox from "./ChatBox";
import ChatBar from "./ChatBar";
import styles from "./Chat.module.scss";

const Chat: React.FC = () => {
  return (
    <main className={styles.container}>
      <MenuBar />
      <ChatBox />
      <ChatBar />
    </main>
  );
};

export default Chat;
