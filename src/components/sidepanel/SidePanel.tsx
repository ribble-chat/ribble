import React from "react";
import GroupsList from "./GroupsList";
import styles from "./SidePanel.module.scss";

const SidePanel: React.FC = () => {
  return (
    <aside id={styles.container}>
      <p id={styles.title}>Ribble</p>
      <GroupsList />
    </aside>
  );
};

export default SidePanel;
