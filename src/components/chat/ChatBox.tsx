import type { Msg } from "types";
import Message from "./Message";
import styles from "./ChatBox.module.scss";
import { useEffect, useState } from "react";
import { MESSAGE_RECEIVED_EVENT, useChathubConnection } from "api";

const ChatBox: React.FC = () => {
  const connection = useChathubConnection();
  const [messages, setMessages] = useState<Msg[]>([]);

  useEffect(() => {
    connection.on(MESSAGE_RECEIVED_EVENT, (msg: Msg) => {
      // console.log(`${msg.authorId} sent "${msg.content}" to current group`);
      console.log(msg);
      setMessages(messages => [msg, ...messages]);
      return () => connection.off(MESSAGE_RECEIVED_EVENT);
    });
  }, [connection]);

  return (
    <div id={styles.container}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
