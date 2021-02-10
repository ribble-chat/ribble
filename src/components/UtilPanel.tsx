import { useRecoilValue } from "recoil";
import { activePageState } from "state";
import { UtilButton } from "types";
import { Page } from "types/util";
import styles from "./UtilPanel.module.scss";

type Props = {
  mainUtilButtons: UtilButton[];
  footerUtilButtons: UtilButton[];
};

const UtilPanel: React.FC<Props> = ({ mainUtilButtons, footerUtilButtons }) => {
  const activePage = useRecoilValue(activePageState);

  function checkSelected(page: Page | undefined): string {
    return page === activePage ? styles.selectedButton : "";
  }

  return (
    <aside id={styles.container}>
      <header id={styles.title}>Ribble</header>

      <section id={styles.mainButtons}>
        {mainUtilButtons.map(({ iconName, handleClick, page }) => (
          <button
            key={iconName}
            className={styles.utilButton}
            id={checkSelected(page)}
            onClick={handleClick}
          >
            <i className={iconName} />
          </button>
        ))}
      </section>
      <footer id={styles.footerContainer}>
        {footerUtilButtons.map(({ iconName, handleClick, page }) => (
          <button
            key={iconName}
            className={styles.utilButton}
            id={checkSelected(page)}
            onClick={handleClick}
          >
            <i className={iconName} />
          </button>
        ))}
      </footer>
    </aside>
  );
};

export default UtilPanel;
