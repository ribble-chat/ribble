import { useRecoilValue } from "recoil";

import { activeChatPageState, currentGroupState } from "state";
import { UtilButton } from "types";
import { Page } from "types/util";

import styles from "./MenuBar.module.scss";

type Props = {
  utilButtons: UtilButton[];
};

const MenuBar: React.FC<Props> = ({ utilButtons }) => {
  const activeChatPage = useRecoilValue(activeChatPageState);

  function checkSelected(chatPage: Page | undefined): string {
    return chatPage === activeChatPage ? styles.selectedButton : "";
  }

  const group = useRecoilValue(currentGroupState)!;
  return (
    <header id={styles.container}>
      <div id={styles.groupTitle}>
        <img
          className={styles.groupPicture}
          src={`./images/${group.picture}`}
          alt="group picture"
        />
        <h3 id={styles.groupName}>{group.name}</h3>
      </div>

      <nav id={styles.utilButtons}>
        {utilButtons.map(({ iconName, handleClick, page }) => (
          <button
            key={iconName}
            className="iconButton"
            id={checkSelected(page)}
            onClick={handleClick}
          >
            <i className={iconName} />
          </button>
        ))}
      </nav>
    </header>
  );
};

export default MenuBar;
