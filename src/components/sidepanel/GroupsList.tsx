import styles from "./GroupsList.module.scss";
import GroupItem from "./GroupItem";
import * as api from "api";
import type { Group } from "types";
import { groupState } from "state";
import { useRecoilState } from "recoil";

let groups: Group[] = [];

let count = 1;
const groupName: string = "group";
const testPicture: string = "nibbles.png";

const GroupsList: React.FC = () => {
  const [group, setGroup] = useRecoilState(groupState);

  function handleNewGroup() {
    let name = `${groupName} ${count++}`;
    api.joinGroup(name, "test user");
    setGroup({ name, picture: testPicture, id: count });
    groups = [{ name, picture: testPicture, id: count }, ...groups];
  }

  return (
    <>
      <header id={styles.utils}>
        <section id={styles.searchBar}>
          <i id={styles.searchIcon} className="fas fa-search" />
          <input id={styles.searchForm} type="text" placeholder="search.." />
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
        {groups.map((group) => (
          <GroupItem key={group.id} group={group} />
        ))}
      </div>
    </>
  );
};

export default GroupsList;
