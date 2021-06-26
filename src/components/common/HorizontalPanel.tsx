import type { PanelItem } from "types";
import styles from "./HorizontalPanel.module.scss";
import { useState } from "react";

type Props = {
  items: PanelItem[];
};

const HorizontalPanel: React.FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState<string>();

  function renderItems(items: PanelItem[]): JSX.Element[] {
    return items.map(({ name, icon, hover, action }) => (
      <button
        key={name}
        className={`${name === selected ? styles.selected : "iconButton"}`}
        onClick={() => {
          setSelected(selected => (selected === name ? undefined : name));
          action(name === selected);
        }}
      >
        <i className={icon} />
      </button>
    ));
  }

  return <section className={styles.items}>{renderItems(items)}</section>;
};

export default HorizontalPanel;
