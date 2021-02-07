import type { Group } from "../../types";
import styles from "./MenuBar.module.scss";

const currentGroup: Group = { name: "test group", picture: "nibbles.png" };
const MenuBar: React.FC = () => {
  //todo if current group
  return (
    <header id={styles.container}>
      <div id={styles.groupTitle}>
        <img
          className={`groupPicture ${styles.groupPicture}`}
          src={`./images/${currentGroup.picture}`}
          alt="."
        />
        <p id={styles.groupName}>{currentGroup.name}</p>
      </div>
      <nav id={styles.utilButtons}>
        <button className="iconButton">
          <i className="fas fa-phone-alt" />
        </button>
        <button className="iconButton">
          <i className="fas fa-search" />
        </button>
        <button className="iconButton">
          <i className="fas fa-cog" />
        </button>
      </nav>
    </header>
  );
};

export default MenuBar;
