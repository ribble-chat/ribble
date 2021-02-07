import React from "react";
import MenuBar from "./MenuBar";
import ChatBox from "./ChatBox";
import ChatBar from "./ChatBar";
import styles from "./Chat.module.scss";

const me = "Jennifer";

const Chat: React.FC = () => {
  return (
    <div id={styles.container}>
      <MenuBar />
      <ChatBox me={me} />
    </div>
  );
};

export default Chat;
