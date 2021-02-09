import React from "react";
import UtilPanel from "./UtilPanel";
import GroupsPanel from "./GroupsPanel";
import styles from "./SidePanel.module.scss";

const SidePanel: React.FC = () => {
  return (
    <div id={styles.container}>
      <UtilPanel />
      <GroupsPanel />
    </div>
  );
};

export default SidePanel;
