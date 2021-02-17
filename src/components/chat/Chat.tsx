import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

import { activeChatPageState, currentGroupState } from "state";
import { Route, Switch, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const currentGroup = useRecoilValue(currentGroupState);
  const [activeChatPage, setActiveChatPage] = useRecoilState(
    activeChatPageState
  );

  const callButton: UtilButton = {
    page: "chat-call",
    iconName: "fas fa-phone-alt",
    handleClick: () => {
      setActiveChatPage(callButton.page);
      history.push("/chat/call");
    },
  };
  const searchButton: UtilButton = {
    page: "chat-search",
    iconName: "fas fa-search",
    handleClick: () => {
      setActiveChatPage(searchButton.page);
      history.push("/chat/search");
    },
  };
  const preferencesButton: UtilButton = {
    page: "chat-preferences",
    iconName: "fas fa-cog",
    handleClick: () => {
      setActiveChatPage(preferencesButton.page);
      history.push("/chat/preferences");
    },
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
          <Switch>
            <Route
              path="/chat/search"
              render={() => (
                <ChatSidePanel
                  title="Search Messages"
                  component={<ChatSearch />}
                />
              )}
            />
            <Route
              path="/chat/preferences"
              render={() => (
                <ChatSidePanel
                  title="Chat Preferences"
                  component={<ChatPreferences />}
                />
              )}
            />
          </Switch>
        </>
      ) : (
        <section id={styles.background} />
      )}
    </article>
  );
};

export default Chat;
