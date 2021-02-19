import { useState } from "react";
import { PanelItem } from "types";
import styles from "./VerticalPanel.module.scss";

type Props = {
  firstItems: PanelItem[];
  lastItems: PanelItem[];
};

const VerticalPanel: React.FC<Props> = ({ firstItems, lastItems }) => {
  const [selected, setSelected] = useState<string>();

  function renderItems(items: PanelItem[]): JSX.Element[] {
    return items.map(({ name, icon, hover, action }) => (
      <button
        key={name}
        className={`${name === selected ? styles.selected : "iconButton"}`}
        onClick={() => {
          setSelected(name);
          action(name === selected);
        }}
      >
        <i className={icon} />
      </button>
    ));
  }

  return (
    <nav className={styles.container}>
      <section className={`${styles.itemsContainer} ${styles.firstItems}`}>
        {renderItems(firstItems)}
      </section>
      <section className={`${styles.itemsContainer} ${styles.lastItems}`}>
        {renderItems(lastItems)}
      </section>
    </nav>
  );
};

export default VerticalPanel;
