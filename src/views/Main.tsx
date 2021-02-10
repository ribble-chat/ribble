import { useRecoilState } from "recoil";
import { useState } from "react";

import { activePageState, userState } from "state";
import { UtilPanel } from "components";
import { UtilButton } from "types";

import { Chat } from "components/chat";
import { Contacts } from "components/contacts";
import { Preferences } from "components/preferences";

import styles from "./Main.module.scss";

const Main = () => {
  const [user, setUser] = useRecoilState(userState);
  const [activePage, setActivePage] = useRecoilState(activePageState);

  const chatButton: UtilButton = {
    page: "chat",
    iconName: "far fa-comment",
    handleClick: () => {
      setActiveUtilButton(chatButton);
      setActivePage(chatButton.page);
    },
    component: <Chat />,
  };

  const contactsButton: UtilButton = {
    page: "contacts",
    iconName: "far fa-user",
    handleClick: () => {
      setActiveUtilButton(contactsButton);
      setActivePage(contactsButton.page);
    },
    component: <Contacts />,
  };
  const preferencesButton: UtilButton = {
    page: "preferences",
    iconName: "fas fa-user-cog",
    handleClick: () => {
      setActiveUtilButton(preferencesButton);
      setActivePage(preferencesButton.page);
    },
    component: <Preferences />,
  };
  const logoutButton: UtilButton = {
    iconName: "fas fa-sign-out-alt",
    handleClick: () => setUser(undefined),
  };

  const [activeUtilButton, setActiveUtilButton] = useState(chatButton);

  const mainUtilButtons: UtilButton[] = [chatButton, contactsButton];
  const footerUtilButtons: UtilButton[] = [preferencesButton, logoutButton];

  return (
    <main id={styles.container}>
      <UtilPanel
        mainUtilButtons={mainUtilButtons}
        footerUtilButtons={footerUtilButtons}
      />
      <section id={styles.currentPage}>
        {activeUtilButton && activeUtilButton.component}
      </section>
    </main>
  );
};

export default Main;
