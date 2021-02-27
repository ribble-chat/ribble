import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentGroupState, modalContentAtom } from "state";
import AddToGroup from "./AddToGroup";

import styles from "./ChatPreferences.module.scss";

const ChatPreferences: React.FC = () => {
  const currentGroup = useRecoilState(currentGroupState);
  const setModalContent = useSetRecoilState(modalContentAtom);

  return (
    <div className="chatSidePanelContainer">
      <button
        className={styles.addToGroupButton}
        onClick={() => setModalContent(<AddToGroup />)}
      >
        <i className="fas fa-user-plus"></i>
        Add user to group
      </button>
    </div>
  );
};

export default ChatPreferences;
