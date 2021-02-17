import { SidePanel } from "./common";
import type { SidePanelItem } from "./common";
import styles from "./UtilPanel.module.scss";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "state";

const UtilPanel: React.FC = () => {
  const history = useHistory();
  const setUser = useSetRecoilState(userState);

  const chatButton: SidePanelItem = {
    name: "chat",
    icon: "far fa-comment",
    action: () => history.push("/chat"),
  };

  const contactsButton: SidePanelItem = {
    name: "contacts",
    icon: "far fa-user",
    action: () => history.push("/contacts"),
  };

  const preferencesButton: SidePanelItem = {
    name: "preferences",
    icon: "fas fa-user-cog",
    action: () => history.push("/preferences"),
  };

  const logoutButton: SidePanelItem = {
    name: "logout",
    icon: "fas fa-sign-out-alt",
    action: () => setUser(undefined),
  };

  return (
    <SidePanel
      topItems={[chatButton, contactsButton]}
      bottomItems={[preferencesButton, logoutButton]}
    />
  );
};

// const UtilPanel: React.FC<Props> = ({ mainUtilButtons, footerUtilButtons }) => {
//   const activePage = useRecoilValue(activePageState);

//   function checkSelected(page: Page | undefined): string {
//     return page === activePage ? styles.selectedButton : "";
//   }

//   return (
//     <aside id={styles.container}>
//       <header id={styles.title}>Ribble</header>

//       <section id={styles.mainButtons}>
//         {mainUtilButtons.map(({ iconName, handleClick, page }) => (
//           <button
//             key={iconName}
//             className={styles.utilButton}
//             id={checkSelected(page)}
//             onClick={handleClick}
//           >
//             <i className={iconName} />
//           </button>
//         ))}
//       </section>
//       <footer id={styles.footerContainer}>
//         {footerUtilButtons.map(({ iconName, handleClick, page }) => (
//           <button
//             key={iconName}
//             className={styles.utilButton}
//             id={checkSelected(page)}
//             onClick={handleClick}
//           >
//             <i className={iconName} />
//           </button>
//         ))}
//       </footer>
//     </aside>
//   );
// };

export default UtilPanel;
