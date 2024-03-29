import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentGroupAtom, userAtom } from "state";

import styles from "./ChatBar.module.scss";
import { useChathubConnection } from "api";

const ChatBar: React.FC = () => {
  const hub = useChathubConnection();
  const [message, setMessage] = useState("");
  const group = useRecoilValue(currentGroupAtom)!;
  const user = useRecoilValue(userAtom)!;

  function sendEmoji() {}

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
    <div className={styles.container}>
      <button className="iconButton">
        <i className="fas fa-plus-circle" />
      </button>
      <form onSubmit={sendMessage}>
        <input
          className={styles.chatForm}
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
          placeholder={`Message ${group.name}`}
        />
      </form>
      <div className={styles.emojiButtonContainer}>
        <button className={styles.emojiButton} onClick={sendEmoji}>
          <i className="fas fa-carrot" />
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
