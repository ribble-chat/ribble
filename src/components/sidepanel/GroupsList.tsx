import styles from "./GroupsList.module.scss";
import GroupItem from "./GroupItem";
import type { Group } from "../../types";

let groups: Group[] = [];

let count = 1;
const groupName: string = "group";
const testPicture: string = "nibbles.png";

function handleNewGroup() {
  //let name = `${groupName} ${count++}`;
  //api.joinGroup(name, "test user");
  //currentGroup.set({ name, picture: testPicture });
  //groups = [{ name, picture: testPicture }, ...groups];
}

const GroupsList: React.FC = () => {
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

      <div id="listContainer">
        {groups.map((group) => (
          <GroupItem group={group} />
        ))}
      </div>
    </>
  );
};

export default GroupsList;
