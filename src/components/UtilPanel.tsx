import { VerticalPanel } from "./common";
import type { PanelItem } from "types";
import styles from "./UtilPanel.module.scss";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { currentUserAtom } from "state";

const UtilPanel: React.FC = () => {
  const history = useHistory();
  const setUser = useSetRecoilState(currentUserAtom);

  const chatButton: PanelItem = {
    name: "chat",
    icon: "far fa-comment",
    action: () => history.push("/chat"),
  };

  const contactsButton: PanelItem = {
    name: "contacts",
    icon: "far fa-user",
    action: () => history.push("/contacts"),
  };

  const preferencesButton: PanelItem = {
    name: "preferences",
    icon: "fas fa-user-cog",
    action: () => history.push("/preferences"),
  };

  const logoutButton: PanelItem = {
    name: "logout",
    icon: "fas fa-sign-out-alt",
    action: () => setUser(undefined),
  };
  return (
    <aside className={styles.container}>
      <header className={styles.title}>Ribble</header>
      <nav className={styles.panelContainer}>
        <VerticalPanel
          firstItems={[chatButton, contactsButton]}
          lastItems={[preferencesButton, logoutButton]}
        />
      </nav>
    </aside>
  );
};
export default UtilPanel;
