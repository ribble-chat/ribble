import { ReactElement, useState } from "react";

type TabsProps = { children: ReactElement<TabProps>[] };

type TabProps = {
  title: string;
  children: ReactElement;
};

export const Tab: React.FC<TabProps> = ({ children }) => children;

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <nav>
      <ul>
        {children.map((item, i) => (
          <li>
            <button key={i} onClick={() => setActiveTabIndex(i)}>
              {item.props.title}
            </button>
          </li>
        ))}
      </ul>
      {children[activeTabIndex]}
    </nav>
  );
};
