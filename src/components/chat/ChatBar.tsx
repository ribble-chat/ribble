import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentGroupState, userState } from "state";
import * as api from "api";
import styles from "./ChatBar.module.scss";

const ChatBar: React.FC = () => {
  const emoji: string = "nibbles.png";

  const [message, setMessage] = useState("");
  const group = useRecoilValue(currentGroupState);
  const user = useRecoilValue(userState)!;

  function sendMessage(e: any) {
    e.preventDefault();
    if (message === "") return;
    api.sendChatMessage({
      authorId: user.id,
      author: user.name,
      groupGuid: group!.guid,
      content: message,
    });
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
          placeholder={`Message ${group!.name}`}
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
