import { useRecoilState } from "recoil";
import { userState } from "state";
import styles from "./UtilPanel.module.scss";

const UtilPanel: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <aside id={styles.container}>
      <header id={styles.title}>Ribble</header>

      <section id={styles.mainButtons}>
        <button
          id={styles.selectedButton}
          className={`iconButton ${styles.utilButton}`}
        >
          <i className="far fa-comment" />
        </button>
        <button className={`iconButton ${styles.utilButton}`}>
          <i className="far fa-user" />
        </button>
      </section>
      <footer id={styles.footerContainer}>
        <button className={`iconButton ${styles.utilButton}`}>
          <i className="fas fa-user-cog" />
        </button>
        <button
          className={`iconButton ${styles.utilButton}`}
          onClick={() => setUser(undefined)}
        >
          <i className="fas fa-sign-out-alt" />
        </button>
      </footer>
    </aside>
  );
};

export default UtilPanel;
