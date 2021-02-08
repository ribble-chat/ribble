import { useRecoilState } from "recoil";
import { groupState } from "state";
import type { Group } from "types";
import styles from "./GroupItem.module.scss";

type Props = {
  group: Group;
};

const GroupItem: React.FC<Props> = ({ group }) => {
  const [currentGroup, setGroup] = useRecoilState(groupState);
  return (
    <div
      className={styles.container}
      id={`${group.name === currentGroup!.name && styles.selected}`}
      onClick={() => setGroup(group)}
    >
      <img
        className={`groupPicture ${styles.groupPicture}`}
        src={`./images/${group.picture}`}
        alt="profile"
      />
      <p className={styles.groupName}>{group.name}</p>
    </div>
  );
};

export default GroupItem;
