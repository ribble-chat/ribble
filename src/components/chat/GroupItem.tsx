import { useRecoilState } from "recoil";
import { currentGroupAtom } from "state";

import type { Group } from "types";

import styles from "./GroupItem.module.scss";

type Props = {
  group: Group;
};

const GroupItem: React.FC<Props> = ({ group }) => {
  const [currentGroup, setGroup] = useRecoilState(currentGroupAtom);
  let style = currentGroup && group.id === currentGroup.id && styles.selected;
  return (
    <div
      className={`${styles.container} ${style}`}
      onClick={() => setGroup(group)}
    >
      <img
        className={styles.groupPicture}
        src={`./images/${group.picture}`}
        alt="profile"
      />
      <p className={styles.groupName}>{group.name}</p>
    </div>
  );
};

export default GroupItem;
