import type { Msg } from "types";
import Message from "./Message";
import styles from "./ChatBox.module.scss";
import { useEffect, useMemo, useState } from "react";
import { MESSAGE_RECEIVED_EVENT, useChathubConnection } from "api";
import { graphql, useSubscription } from "react-relay/hooks";

// const subscription = graphql`
// subscription {

// }
// `;

const ChatBox: React.FC = () => {
  const hub = useChathubConnection();
  const [messages, setMessages] = useState<Msg[]>([]);

  // useSubscription(useMemo(() => ({ variables: {}, subscription }), []));

  useEffect(() => {
    hub.connection.on(MESSAGE_RECEIVED_EVENT, (msg: Msg) => {
      setMessages(messages => [msg, ...messages]);
    });
    return () => hub.connection.off(MESSAGE_RECEIVED_EVENT);
  }, [hub]);

  return (
    <div className={styles.container}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
