import { useRecoilState } from "recoil";
import { currentGroupState } from "state";

import styles from "./ChatPreferences.module.scss";

const ChatPreferences: React.FC = () => {
  const currentGroup = useRecoilState(currentGroupState);

  function handleAddToGroup() {}

  return (
    <div className="chatSidePanelContainer">
      <button className={styles.addToGroupButton} onClick={handleAddToGroup}>
        <i className="fas fa-user-plus"></i>
        Add user to group
      </button>
    </div>
  );
};
export default ChatPreferences;
