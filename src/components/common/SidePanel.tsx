import React, { useState } from "react";

export type SidePanelItem = {
  /// unique name
  name: string;
  icon: string;
  hover?: string;
  action: () => void;
};

type Props = {
  title?: string;
  topItems: SidePanelItem[];
  bottomItems: SidePanelItem[];
};

const SidePanel: React.FC<Props> = ({ title, topItems, bottomItems }) => {
  const [selected, setSelected] = useState<string>();

  function renderItems(items: SidePanelItem[]): JSX.Element[] {
    return topItems.map(({ name, icon, hover, action }) => (
      <li
        key={name}
        className={name === selected ? "selectedClass" : "notSelectedClass"}
      >
        <button
          onClick={() => {
            setSelected(name);
            action();
          }}
        >
          <img src={icon} alt={name} />
        </button>
      </li>
    ));
  }

  return (
    <aside>
      <h4>{title}</h4>
      <ul>
        {renderItems(topItems)}
        <br />
        {renderItems(bottomItems)}
      </ul>
    </aside>
  );
};

export default SidePanel;
