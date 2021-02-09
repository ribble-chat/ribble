import styles from "./GroupsPanel.module.scss";
import GroupItem from "./GroupItem";
import * as api from "api";
import type { Group } from "types";
import { currentGroupState, userState } from "state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

const GroupsList: React.FC = () => {
  let id = 0;
  const user = useRecoilValue(userState)!;
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupState);
  const [newGroupName, setNewGroupName] = useState("");
  const [prevSelectedGroup, setPrevSelectedGroup] = useState<Group | undefined>(
    undefined
  );

  let groups: Group[] = [];

  const testPicture: string = "nibbles.png";

  function handleNewGroup() {
    const name = "todo";
    api.createGroup({ name, userIds: [user.id] });
    let newGroup: Group = {
      name: newGroupName,
      picture: testPicture,
      guid: "",
    };
    setCurrentGroup(newGroup);
    groups = [newGroup, ...groups];
  }

  function cancelCreateGroup() {
    setCurrentGroup(prevSelectedGroup);
    setNewGroupName("");
  }

  return (
    <section id={styles.container}>
      <header id={styles.utils}>
        <section id={styles.searchBar}>
          <i id={styles.searchIcon} className="fas fa-search" />
          <input id={styles.searchForm} type="text" placeholder="Search..." />
        </section>

        <button
          id={styles.createGroupButton}
          className="iconButton"
          onClick={() => {
            setPrevSelectedGroup(currentGroup);
            setCurrentGroup(undefined);
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </header>

      <div id={styles.listContainer}>
        {!currentGroup && (
          <section id={styles.createGroupContainer}>
            <form onSubmit={handleNewGroup}>
              <input
                type="text"
                placeholder="enter group name"
                value={newGroupName}
                onChange={e => setNewGroupName(e.target.value)}
              ></input>
            </form>
            <button
              id={styles.cancelButton}
              className="iconButton"
              onClick={cancelCreateGroup}
            >
              <i className="fas fa-times"></i>
            </button>
          </section>
        )}

        {groups.map(group => (
          <GroupItem key={id++} group={group} />
        ))}
      </div>
    </section>
  );
};

export default GroupsList;
