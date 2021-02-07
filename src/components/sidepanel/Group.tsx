import type { Group } from "../../types";
import styles from "./Group.module.scss";

type Props = {
  group: Group;
};

function setGroup() {
  //todo
}

const Group: React.FC<Props> = ({ group }) => {
  return (
    <div className={styles.container} onClick={setGroup}>
      <img
        className={`groupPicture ${styles.groupPicture}`}
        src={`./images/${group.picture}`}
        alt="profile"
      />
      <p className={styles.groupName}>{group.name}</p>
    </div>
  );
};

export default Group;
