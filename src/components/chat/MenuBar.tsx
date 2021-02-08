import { useRecoilValue } from "recoil";
import { groupState } from "state";
import styles from "./MenuBar.module.scss";

const MenuBar: React.FC = () => {
  const group = useRecoilValue(groupState);
  return (
    <header id={styles.container}>
      {group && (
        <div id={styles.groupTitle}>
          <img
            className={`groupPicture ${styles.groupPicture}`}
            src={`./images/${group.picture}`}
            alt="."
          />
          <p id={styles.groupName}>{group.name}</p>
        </div>
      )}

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
