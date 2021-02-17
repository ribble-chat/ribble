import React, { useState } from "react";
import styles from "./SidePanel.module.scss";

export type SidePanelItem = {
  /// unique name
  name: string;
  icon: string;
  hover?: string;
  action: () => void;
};

type Props = {
  firstItems: SidePanelItem[];
  lastItems: SidePanelItem[];
};

const SidePanel: React.FC<Props> = ({ firstItems, lastItems }) => {
  const [selected, setSelected] = useState<string>();

  function renderItems(items: SidePanelItem[]): JSX.Element[] {
    return items.map(({ name, icon, hover, action }) => (
      <button
        key={name}
        className={`${name === selected ? styles.selected : "iconButton"}`}
        onClick={() => {
          setSelected(name);
          action();
        }}
      >
        <i className={icon} />
      </button>
    ));
  }

  return (
    <>
      <section className={styles.firstButtons}>
        {renderItems(firstItems)}
      </section>
      <section className={styles.lastButtons}>{renderItems(lastItems)}</section>
    </>
  );
};

export default SidePanel;
