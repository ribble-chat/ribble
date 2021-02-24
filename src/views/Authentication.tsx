import { ReactElement, useState } from "react";
import { Login, Register } from "components/auth";

import styles from "./Authentication.module.scss";

type TabButton = {
  name: string;
  title: string;
  component: ReactElement;
};

const loginTabButton: TabButton = {
  name: "login",
  title: "LOG IN",
  component: <Login />,
};

const registerTabButton: TabButton = {
  name: "register",
  title: "REGISTER",
  component: <Register />,
};

const Authentication: React.FC = () => {
  const [activeTab, setTab] = useState(loginTabButton);

  return (
    <div id={styles.background}>
      <main id={styles.formBackground}>
        <section id={styles.navigation}>
          <h2 id={styles.ribbleTitle}>Ribble</h2>

          <nav className={styles.tabButtons}>
            {[loginTabButton, registerTabButton].map(tabButton => {
              return (
                <button
                  key={tabButton.name}
                  className={
                    activeTab === tabButton
                      ? styles.selectedTab
                      : styles.tabButton
                  }
                  onClick={() => setTab(tabButton)}
                >
                  {tabButton.title}
                </button>
              );
            })}
          </nav>
        </section>

        {activeTab.component}
      </main>
    </div>
  );
};

export default Authentication;
