import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "state";
import GroupsList from "./GroupsList";
import styles from "./SidePanel.module.scss";

const SidePanel: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <aside id={styles.container}>
      <div id={styles.title}>
        <p>Ribble</p>
        <button
          id={styles.logoutButton}
          className="iconButton"
          onClick={() => setUser(undefined)}
        >
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <GroupsList />
    </aside>
  );
};

export default SidePanel;
