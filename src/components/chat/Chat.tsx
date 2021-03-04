import GroupsPanel from "./GroupsPanel";
import MenuBar from "./MenuBar";
import ChatBox from "./ChatBox";
import ChatBar from "./ChatBar";
import ChatSidePanel from "./ChatSidePanel";
import ChatSearch from "./ChatSearch";
import ChatPreferences from "./ChatPreferences";
import { currentGroupAtom, currentUserAtom } from "state";
import { useRecoilValue } from "recoil";
import { Switch, Route } from "react-router-dom";
import styles from "./Chat.module.scss";
import { useEffect } from "react";
import { useChathubConnection } from "api";

const Chat: React.FC = () => {
  const user = useRecoilValue(currentUserAtom)!;
  const hub = useChathubConnection();
  const currentGroup = useRecoilValue(currentGroupAtom);

  useEffect(() => {
    // hub.joinGroups(...user.groups.map(group => group.id));
  }, [currentGroup, hub, user.groups]);

  return (
    <article className={styles.container}>
      <GroupsPanel />
      {currentGroup ? (
        <section className={styles.chatContainer}>
          <MenuBar />
          <ChatBox />
          <ChatBar />
        </section>
      ) : (
        <section className={styles.background} />
      )}
      <Switch>
        <Route
          path="/chat/search"
          render={() => <ChatSidePanel title="Search Messages" component={<ChatSearch />} />}
        />
        <Route
          path="/chat/preferences"
          render={() => <ChatSidePanel title="Chat Preferences" component={<ChatPreferences />} />}
        />
      </Switch>
    </article>
  );
};
export default Chat;
