import type { Group } from "../../types";
import styles from "./GroupItem.module.scss";

type Props = {
  group: Group;
};

function setGroup() {
  //todo
}

const GroupItem: React.FC<Props> = ({ group }) => {
  return (
    <div id={styles.container} onClick={setGroup}>
      <img
        className="groupPicture"
        src={`./images/${group.picture}`}
        alt="profile"
      />
      <p id="groupName">{group.name}</p>
    </div>
  );
};

export default GroupItem;
