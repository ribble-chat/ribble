import type { Msg } from "../../types";
import styles from "./Message.module.scss";

type Props = {
  message: Msg;
};

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.block}>
      <p className={styles.message}>{message.content}</p>
    </div>
  );
};

export default Message;
