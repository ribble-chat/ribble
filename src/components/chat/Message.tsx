import { useRecoilValue } from "recoil";
import { userAtom } from "state";
import type { Msg } from "types";

import styles from "./Message.module.scss";

type Props = {
  message: Msg;
};

const Message: React.FC<Props> = ({ message }) => {
  const user = useRecoilValue(userAtom)!;
  const messageClass =
    user.id === message.authorId ? styles.self : styles.other;
  return (
    <div className={`${styles.container} ${messageClass}`}>
      <p className={styles.messageText}>{message.content}</p>
    </div>
  );
};

export default Message;

