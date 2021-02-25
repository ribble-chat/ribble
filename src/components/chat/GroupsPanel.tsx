import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

import * as api from "api";
import GroupItem from "./GroupItem";
import type { Group } from "types";
import { currentGroupState, userState } from "state";

import styles from "./GroupsPanel.module.scss";
import { CreateGroupRequest } from "api";

const GroupsList: React.FC = () => {
  const user = useRecoilValue(userState)!;
  const [groups, setGroups] = useState<Group[]>(user.groups);
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupState);
  const [newGroupName, setNewGroupName] = useState("");
  const [prevSelectedGroup, setPrevSelectedGroup] = useState<Group>();

  async function handleNewGroup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newGroupName === "") return;
    setNewGroupName("");

    const newGroupRequest: CreateGroupRequest = {
      groupName: newGroupName,
      userIds: [user.id],
    };

    (await api.createGroup(newGroupRequest))
      .map(group => {
        setGroups(groups => [group, ...groups]);
        setCurrentGroup(group);
      })
      // use react-toastify or something dunno
      .mapErr(console.log);
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
          <section className={styles.createGroupContainer}>
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
          <GroupItem key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
};

export default GroupsList;
