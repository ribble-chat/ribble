import type { Msg } from "types";
import Message from "./Message";

import styles from "./ChatBox.module.scss";

const messages: Msg[] = [];

const ChatBox: React.FC = () => {
  return (
    <div id={styles.container}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
