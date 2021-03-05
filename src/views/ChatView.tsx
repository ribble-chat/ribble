import {
  GroupsPanel,
  Chat,
  ChatSidePanel,
  ChatSearch,
  ChatPreferences,
} from "components/chat";

import { currentGroupAtom, currentUserAtom } from "state";
import { useRecoilValue } from "recoil";
import { Switch, Route } from "react-router-dom";
import styles from "./ChatView.module.scss";
import { useEffect } from "react";
import { useChathubConnection } from "api";

const ChatView: React.FC = () => {
  const user = useRecoilValue(currentUserAtom)!;
  const hub = useChathubConnection();
  const currentGroup = useRecoilValue(currentGroupAtom);

  // useEffect(() => {
  // hub.joinGroups(...user.groups.map(group => group.id));
  // }, [currentGroup, hub, user]);

  return (
    <article className={styles.container}>
      <GroupsPanel />
      {currentGroup ? <Chat /> : <section className={styles.background} />}
      <Switch>
        <Route
          path="/chat/search"
          render={() => (
            <ChatSidePanel title="Search Messages">
              <ChatSearch />
            </ChatSidePanel>
          )}
        />
        <Route
          path="/chat/preferences"
          render={() => (
            <ChatSidePanel title="Chat Preferences">
              <ChatPreferences />
            </ChatSidePanel>
          )}
        />
      </Switch>
    </article>
  );
};

export default ChatView;
