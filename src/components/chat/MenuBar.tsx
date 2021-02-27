import { HorizontalPanel } from "components/common";
import type { PanelItem } from "types";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentGroupAtom } from "state";

import styles from "./MenuBar.module.scss";

const MenuBar: React.FC = () => {
  const history = useHistory();
  const group = useRecoilValue(currentGroupAtom)!;

  const callButton: PanelItem = {
    name: "call",
    icon: "fas fa-phone-alt",
    action: isSelected => console.log("call"),
  };

  const searchButton: PanelItem = {
    name: "chat search",
    icon: "fas fa-search",
    action: isSelected => history.push(isSelected ? "/chat" : "/chat/search"),
  };

  const preferencesButton: PanelItem = {
    name: "chat preferences",
    icon: "fas fa-cog",
    action: isSelected =>
      history.push(isSelected ? "/chat" : "/chat/preferences"),
  };

  return (
    <header id={styles.container}>
      <div id={styles.groupTitle}>
        <img
          className={styles.groupPicture}
          src={`./images/${group.picture}`}
          alt="group"
        />
        <h3 id={styles.groupName}>{group.name}</h3>
      </div>

      <nav className={styles.panelContainer}>
        <HorizontalPanel
          items={[callButton, searchButton, preferencesButton]}
        />
      </nav>
    </header>
  );
};

export default MenuBar;
