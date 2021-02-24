import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentGroupState, userState } from "state";

import styles from "./ChatBar.module.scss";
import { useChathubConnection } from "api";

const ChatBar: React.FC = () => {
  const emoji: string = "nibbles.png";

  const hub = useChathubConnection();
  const [message, setMessage] = useState("");
  const group = useRecoilValue(currentGroupState)!;
  const user = useRecoilValue(userState)!;

  function sendMessage(e: any) {
    e.preventDefault();
    if (message === "") return;
    hub.sendChatMessage({
      authorId: user.id,
      authorName: user.username,
      groupId: group.id,
      content: message,
    });
    setMessage("");
  }

  return (
    <div id={styles.container}>
      <button className="iconButton">
        <i className="fas fa-plus-circle" />
      </button>
      <form onSubmit={sendMessage}>
        <input
          id={styles.chatForm}
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
          placeholder={`Message ${group.name}`}
        />
      </form>
      <img
        id={styles.emojiButton}
        src={`./images/${emoji}`}
        alt="Send emoji button"
        onClick={sendMessage}
      />
    </div>
  );
};

export default ChatBar;
