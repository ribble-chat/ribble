import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

import * as api from "api";
import GroupItem from "./GroupItem";
import type { Group } from "types";
import { currentGroupAtom, userAtom } from "state";

import styles from "./GroupsPanel.module.scss";
import { CreateGroupRequest } from "api";

const GroupsList: React.FC = () => {
  const user = useRecoilValue(userAtom)!;
  const [groups, setGroups] = useState<Group[]>(user.groups);
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupAtom);
  const [newGroupName, setNewGroupName] = useState("");
  const [prevSelectedGroup, setPrevSelectedGroup] = useState<Group>();
  const [isCreatingGroup, setCreatingGroup] = useState(false);

  async function handleNewGroup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newGroupName === "") return;
    setNewGroupName("");
    setCreatingGroup(false);

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
    setCreatingGroup(true);
    setPrevSelectedGroup(currentGroup);
    setCurrentGroup(undefined);
  }

  function cancelCreateGroup() {
    setCreatingGroup(false);
    setNewGroupName("");
    setCurrentGroup(prevSelectedGroup);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className={styles.container}>
      <header className={styles.utils}>
        <section className={styles.searchBar}>
          <i className={`fas fa-search ${styles.searchIcon}`} />
          <form onSubmit={handleSearch}>
            <input
              className={styles.searchForm}
              type="text"
              placeholder="Search..."
            />
          </form>
        </section>

        <button
          className={styles.createGroupButton}
          onClick={openGroupCreation}
        >
          <i className="fas fa-plus" />
        </button>
      </header>

      <div className={styles.listContainer}>
        {isCreatingGroup && !currentGroup && (
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
            <button className={styles.cancelButton} onClick={cancelCreateGroup}>
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
