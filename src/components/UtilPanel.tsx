import { SidePanel } from "./common";
import type { SidePanelItem } from "./common";
import styles from "./UtilPanel.module.scss";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "state";

const UtilPanel: React.FC = () => {
  const history = useHistory();
  const setUser = useSetRecoilState(userState);

  const chatButton: SidePanelItem = {
    name: "chat",
    icon: "far fa-comment",
    action: () => history.push("/chat"),
  };

  const contactsButton: SidePanelItem = {
    name: "contacts",
    icon: "far fa-user",
    action: () => history.push("/contacts"),
  };

  const preferencesButton: SidePanelItem = {
    name: "preferences",
    icon: "fas fa-user-cog",
    action: () => history.push("/preferences"),
  };

  const logoutButton: SidePanelItem = {
    name: "logout",
    icon: "fas fa-sign-out-alt",
    action: () => setUser(undefined),
  };

  return (
    <aside className={styles.container}>
      <header className={styles.title}>Ribble</header>
      <nav className={styles.panelContainer}>
        <SidePanel
          firstItems={[chatButton, contactsButton]}
          lastItems={[preferencesButton, logoutButton]}
        />
      </nav>
    </aside>
  );
};

export default UtilPanel;
