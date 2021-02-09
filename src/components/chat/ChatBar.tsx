import { useState } from "react";
import { useRecoilValue } from "recoil";
import { groupState } from "state";
import * as api from "api";
import styles from "./ChatBar.module.scss";

const ChatBar: React.FC = () => {
  const emoji: string = "nibbles.png";

  const [message, setMessage] = useState("");
  const group = useRecoilValue(groupState);

  function sendMessage() {
    if (message === "") return;
    api.sendMessageToGroup(group!.name, message);
  }

  return (
    <div id={styles.container}>
      <button id={styles.addButton} className="iconButton">
        <i className="fas fa-plus-circle" />
      </button>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        id={styles.chatForm}
        type="text"
        placeholder="Type a message..."
      />
      <img
        id={styles.emojiButton}
        src={`./images/${emoji}`}
        alt="emoji"
        onClick={sendMessage}
      />
    </div>
  );
};

export default ChatBar;
