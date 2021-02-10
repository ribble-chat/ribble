import type { Msg } from "types";
import Message from "./Message";

import styles from "./ChatBox.module.scss";

const messages: Msg[] = [
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 1,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 2,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 3,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 4,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 5,
  },
  {
    from: "Nibbles",
    to: "Jennifer",
    content: "<3",
    id: 6,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 7,
  },
  {
    from: "Nibbles",
    to: "Jennifer",
    content: "<3",
    id: 8,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "<3",
    id: 9,
  },
  {
    from: "Nibbles",
    to: "Jennifer",
    content: "<3",
    id: 10,
  },
  {
    from: "Nibbles",
    to: "Jennifer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: 11,
  },
  {
    from: "Nibbles",
    to: "Jennifer",
    content: "thanks hehe",
    id: 12,
  },
  {
    from: "Jennifer",
    to: "Nibbles",
    content: "ok omw!",
    id: 13,
  },
  {
    from: "Nibbles",
    to: "Jennifer",
    content: "can you please feed me :(",
    id: 14,
  },
];

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
