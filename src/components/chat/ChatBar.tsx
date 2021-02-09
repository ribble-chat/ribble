import { useState } from "react";
import { useRecoilValue } from "recoil";
import { groupState, userState } from "state";
import * as api from "api";
import styles from "./ChatBar.module.scss";

const ChatBar: React.FC = () => {
  const emoji: string = "nibbles.png";

  const [message, setMessage] = useState("");

  const user = useRecoilValue(userState)!;
  const group = useRecoilValue(groupState)!;

  function sendMessage(e: any) {
    e.preventDefault();
    if (message === "") return;
    api.sendChatMessage({
      authorId: user.id,
      author: user.name,
      groupGuid: group.guid,
      content: message,
    });
  }

  return (
    <div id={styles.container}>
      <button id={styles.addButton} className="iconButton">
        <i className="fas fa-plus-circle" />
      </button>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          id={styles.chatForm}
          type="text"
          placeholder={`Message ${group.name}`}
        />
      </form>
      <button onClick={sendMessage}>
        <img
          id={styles.emojiButton}
          src={`./images/${emoji}`}
          alt="Send emoji button"
        />
      </button>
    </div>
  );
};

export default ChatBar;
