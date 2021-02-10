import { useRecoilValue } from "recoil";
import { activePageState } from "state";
import { UtilButton } from "types";
import styles from "./UtilPanel.module.scss";

type Props = {
  mainUtilButtons: UtilButton[];
  footerUtilButtons: UtilButton[];
};

const UtilPanel: React.FC<Props> = ({ mainUtilButtons, footerUtilButtons }) => {
  const activePage = useRecoilValue(activePageState);

  function checkSelected(button: UtilButton): string {
    return activePage && button.page === activePage
      ? styles.selectedButton
      : "";
  }

  return (
    <aside id={styles.container}>
      <header id={styles.title}>Ribble</header>

      <section id={styles.mainButtons}>
        {mainUtilButtons.map(button => (
          <button
            key={button.iconName}
            className={styles.utilButton}
            id={checkSelected(button)}
            onClick={button.handleClick}
          >
            <i className={button.iconName} />
          </button>
        ))}
      </section>
      <footer id={styles.footerContainer}>
        {footerUtilButtons.map(button => (
          <button
            key={button.iconName}
            className={styles.utilButton}
            id={checkSelected(button)}
            onClick={button.handleClick}
          >
            <i className={button.iconName} />
          </button>
        ))}
      </footer>
    </aside>
  );
};

export default UtilPanel;
