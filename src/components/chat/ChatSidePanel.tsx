import { ReactElement } from "react";

import styles from "./ChatSidePanel.module.scss";

type Props = {
  title?: string;
  children?: ReactElement;
};

const ChatSidePanel: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.titleBar}>
        <h4>{title}</h4>
      </header>
      {children}
    </div>
  );
};

export default ChatSidePanel;
