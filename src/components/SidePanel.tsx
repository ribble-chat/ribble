import React from "react";
import styles from "./SidePanel.module.scss";

const SidePanel: React.FC = () => {
  return (
    <aside id={styles.container}>
      <div>Todo</div>
    </aside>
  );
};

export default SidePanel;
