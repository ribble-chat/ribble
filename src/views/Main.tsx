import { useRecoilState } from "recoil";

import { activePageState, userState } from "state";
import { UtilPanel } from "components";
import { UtilButton } from "types";
import { Route, Switch, useHistory } from "react-router-dom";

import { Chat } from "components/chat";
import { Contacts } from "components/contacts";
import { Preferences } from "components/preferences";

import styles from "./Main.module.scss";

const Main = () => {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);
  const [activePage, setActivePage] = useRecoilState(activePageState);

  const chatButton: UtilButton = {
    page: "chat",
    iconName: "far fa-comment",
    handleClick: () => {
      setActivePage(chatButton.page);
      history.push("/chat");
    },
  };
  const contactsButton: UtilButton = {
    page: "contacts",
    iconName: "far fa-user",
    handleClick: () => {
      setActivePage(contactsButton.page);
      history.push("/contacts");
    },
  };
  const preferencesButton: UtilButton = {
    page: "preferences",
    iconName: "fas fa-user-cog",
    handleClick: () => {
      setActivePage(preferencesButton.page);
      history.push("/preferences");
    },
  };
  const logoutButton: UtilButton = {
    iconName: "fas fa-sign-out-alt",
    handleClick: () => setUser(undefined),
  };

  const mainUtilButtons: UtilButton[] = [chatButton, contactsButton];
  const footerUtilButtons: UtilButton[] = [preferencesButton, logoutButton];

  return (
    <main id={styles.container}>
      <Route
        path="/"
        render={() => (
          <UtilPanel
            mainUtilButtons={mainUtilButtons}
            footerUtilButtons={footerUtilButtons}
          />
        )}
      />
      <section id={styles.currentPage}>
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </section>
    </main>
  );
};

export default Main;
