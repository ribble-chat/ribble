import { ReactElement, useState } from "react";
import styles from "./Tabs.module.scss";

type TabsProps = { children: ReactElement<TabProps>[] };

type TabProps = {
  title: string;
  children: ReactElement;
};

export const Tab: React.FC<TabProps> = ({ children }) => children;

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <nav className={styles.container}>
      <ul className={styles.tabButtons}>
        {children.map((item, i) => (
          <li key={i}>
            <button
              className={
                i === activeTabIndex ? styles.selectedTab : styles.tabButton
              }
              onClick={() => setActiveTabIndex(i)}
            >
              {item.props.title}
            </button>
          </li>
        ))}
      </ul>
      {children[activeTabIndex]}
    </nav>
  );
};
