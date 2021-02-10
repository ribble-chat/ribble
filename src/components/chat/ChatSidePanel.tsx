import { ReactElement } from "react";
import { useRecoilState } from "recoil";

import { activeChatPageState } from "state";

import styles from "./ChatSidePanel.module.scss";

type Props = {
  title: string | undefined;
  component: ReactElement | undefined;
};

const ChatSidePanel: React.FC<Props> = ({ title, component }) => {
  const [activeChatPage, setActiveChatPage] = useRecoilState(
    activeChatPageState
  );
  return (
    <div id={styles.container}>
      <header id={styles.titleBar}>
        <button
          className={styles.backButton}
          onClick={() => setActiveChatPage(undefined)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <h4>{title}</h4>
      </header>
      {component}
    </div>
  );
};

export default ChatSidePanel;
