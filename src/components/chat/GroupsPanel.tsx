import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import GroupItem from "./GroupItem";
import type { GroupOverview } from "types";
import graphql from "babel-plugin-relay/macro";
import styles from "./GroupsPanel.module.scss";
import { useMutation } from "react-relay/hooks";
import {
  currentGroupAtom,
  currentUserAtom,
  userGroupOverviewsAtom,
} from "state";
import {
  GroupsPanelCreateGroupMutation,
  GroupsPanelCreateGroupMutationResponse,
} from "./__generated__/GroupsPanelCreateGroupMutation.graphql";

const GroupsList: React.FC = () => {
  const currentUser = useRecoilValue(currentUserAtom)!;
  const [groupOverviews, setGroupOverviews] = useRecoilState(
    userGroupOverviewsAtom
  );
  const [currentGroup, setCurrentGroup] = useRecoilState(currentGroupAtom);
  const [newGroupName, setNewGroupName] = useState("");
  const [prevSelectedGroup, setPrevSelectedGroup] = useState<GroupOverview>();
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);

  const [
    commitCreateGroup,
    _isLoading,
  ] = useMutation<GroupsPanelCreateGroupMutation>(
    graphql`
      mutation GroupsPanelCreateGroupMutation(
        $newGroupName: String!
        $userIds: [ID!]!
      ) {
        createGroup(input: { groupName: $newGroupName, userIds: $userIds }) {
          group {
            id
            name
            users {
              id
              username
              email
            }
          }
        }
      }
    `
  );

  function handleGroupCreated(res: GroupsPanelCreateGroupMutationResponse) {
    const { group } = res.createGroup;
    setGroupOverviews(groups => [group, ...groups]);
    setCurrentGroup(group);
  }

  async function handleNewGroup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newGroupName === "") return;
    setNewGroupName("");
    setIsCreatingGroup(false);

    commitCreateGroup({
      variables: { newGroupName, userIds: [currentUser.id] },
      onCompleted: handleGroupCreated,
      onError: console.log,
    });
  }

  function openGroupCreation() {
    setIsCreatingGroup(true);
    setPrevSelectedGroup(currentGroup);
    setCurrentGroup(undefined);
  }

  function cancelCreateGroup() {
    setIsCreatingGroup(false);
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
        {isCreatingGroup && (
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

        {groupOverviews.map(group => (
          <GroupItem key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
};

export default GroupsList;
