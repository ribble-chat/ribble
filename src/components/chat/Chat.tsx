import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

import { activeChatPageState, currentGroupState } from "state";
import GroupsPanel from "./GroupsPanel";
import MenuBar from "./MenuBar";
import ChatBox from "./ChatBox";
import ChatBar from "./ChatBar";
import ChatSidePanel from "./ChatSidePanel";
import ChatSearch from "./ChatSearch";
import ChatPreferences from "./ChatPreferences";

import styles from "./Chat.module.scss";
import { UtilButton } from "types";

const Chat: React.FC = () => {
  const currentGroup = useRecoilValue(currentGroupState);
  const [activeChatPage, setActiveChatPage] = useRecoilState(
    activeChatPageState
  );
  const [currentUtilButton, setCurrentUtilButton] = useState<
    UtilButton | undefined
  >(undefined);

  const callButton: UtilButton = {
    page: "chat-call",
    iconName: "fas fa-phone-alt",
    handleClick: () => {
      setCurrentUtilButton(callButton);
      setActiveChatPage(callButton.page);
    },
    component: undefined,
  };
  const searchButton: UtilButton = {
    page: "chat-search",
    iconName: "fas fa-search",
    handleClick: () => {
      setCurrentUtilButton(searchButton);
      setActiveChatPage(searchButton.page);
    },
    component: <ChatSearch />,
    title: "Search Messages",
  };
  const preferencesButton: UtilButton = {
    page: "chat-preferences",
    iconName: "fas fa-cog",
    handleClick: () => {
      setCurrentUtilButton(preferencesButton);
      setActiveChatPage(preferencesButton.page);
    },
    component: <ChatPreferences />,
    title: "Chat Preferences",
  };

  const utilButtons: UtilButton[] = [
    callButton,
    searchButton,
    preferencesButton,
  ];

  return (
    <article id={styles.container}>
      <GroupsPanel />
      {currentGroup ? (
        <>
          <section id={styles.chatContainer}>
            <MenuBar utilButtons={utilButtons} />
            <ChatBox />
            <ChatBar />
          </section>
          {activeChatPage &&
            currentUtilButton &&
            currentUtilButton.component && (
              <ChatSidePanel
                title={currentUtilButton.title}
                component={currentUtilButton.component}
              />
            )}
        </>
      ) : (
        <section id={styles.background} />
      )}
    </article>
  );
};

export default Chat;
