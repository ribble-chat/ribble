import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

import * as api from "api";
import GroupItem from "./GroupItem";
import type { Group } from "types";
import { currentGroupState, userState } from "state";

import styles from "./GroupsPanel.module.scss";

const testPicture: string = "default.png";
let groups: Group[] = [];

let id = 0;
const GroupsList: React.FC = () => {
  const user = useRecoilValue(userState)!;
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupState);
  const [newGroupName, setNewGroupName] = useState("");
  const [prevSelectedGroup, setPrevSelectedGroup] = useState<Group>();

  function handleNewGroup(e: React.FormEvent<HTMLFormElement>) {
    if (newGroupName === "") return;
    e.preventDefault();
    let newGroup: Group = {
      name: newGroupName,
      picture: testPicture,
      guid: `newGroupName${id++}`,
    };
    api.createGroup({ name: newGroup.name, userIds: [user.id] });
    groups = [newGroup, ...groups];
    setCurrentGroup(newGroup);
    setNewGroupName("");
  }

  function openGroupCreation() {
    setPrevSelectedGroup(currentGroup);
    setCurrentGroup(undefined);
  }

  function cancelCreateGroup() {
    setNewGroupName("");
    setCurrentGroup(prevSelectedGroup);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id={styles.container}>
      <header id={styles.utils}>
        <section id={styles.searchBar}>
          <i id={styles.searchIcon} className="fas fa-search" />
          <form onSubmit={handleSearch}>
            <input id={styles.searchForm} type="text" placeholder="Search..." />
          </form>
        </section>

        <button
          id={styles.createGroupButton}
          className="iconButton"
          onClick={openGroupCreation}
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
                autoFocus
                placeholder="Create new group..."
                value={newGroupName}
                onChange={e => setNewGroupName(e.target.value)}
              />
            </form>
            <button
              id={styles.cancelButton}
              className="iconButton"
              onClick={cancelCreateGroup}
            >
              <i className="fas fa-times" />
            </button>
          </section>
        )}

        {groups.map(group => (
          <GroupItem key={group.guid} group={group} />
        ))}
      </div>
    </section>
  );
};

export default GroupsList;
