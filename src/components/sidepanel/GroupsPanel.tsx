import styles from "./GroupsPanel.module.scss";
import GroupItem from "./GroupItem";
import * as api from "api";
import type { Group } from "types";
import { groupState, userState } from "state";
import { useRecoilState, useRecoilValue } from "recoil";

const GroupsList: React.FC = () => {
  const user = useRecoilValue(userState)!;
  const [currentGroup, setCurrentGroup] = useRecoilState(groupState);

  let groups: Group[] = [];

  const testPicture: string = "nibbles.png";

  function handleNewGroup() {
    const name = "todo";
    api.createGroup({ name, userIds: [user.id] });
    // setCurrentGroup({ name, picture: testPicture, guid: "todo" });
    // groups = [{ name, picture: testPicture, guid: "todo1" }, ...groups];
  }

  return (
    <section id={styles.container}>
      <header id={styles.utils}>
        <section id={styles.searchBar}>
          <i id={styles.searchIcon} className="fas fa-search" />
          <input id={styles.searchForm} type="text" placeholder="Search..." />
        </section>

        <button
          id={styles.joinGroupButton}
          className="iconButton"
          onClick={handleNewGroup}
        >
          <i className="fas fa-plus" />
        </button>
      </header>

      <div id={styles.listContainer}>
        {groups.map(group => (
          <GroupItem key={group.guid} group={group} />
        ))}
      </div>
    </section>
  );
};

export default GroupsList;
