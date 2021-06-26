import { ReactElement } from "react";

import styles from "./ChatSidePanel.module.scss";

type Props = {
  title?: string;
  component?: ReactElement;
};

const ChatSidePanel: React.FC<Props> = ({ title, component }) => {
  return (
    <div className={styles.container}>
      <header className={styles.titleBar}>
        <h4>{title}</h4>
      </header>
      {component}
    </div>
  );
};

export default ChatSidePanel;
