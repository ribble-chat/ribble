import { useState } from "react";
import { Login, Register } from "components/auth";

import styles from "./Authentication.module.scss";

const Authentication: React.FC = () => {
  type Tab = "login" | "register";
  const [activeTab, setTab] = useState<Tab>("login");

  return (
    <div id={styles.background}>
      <main id={styles.formBackground}>
        <section id={styles.navigation}>
          <h2 id={styles.ribbleTitle}>Ribble</h2>

          <nav id={styles.tabButtons}>
            {activeTab === "login" ? (
              <>
                <button className={styles.selectedTab} onClick={() => setTab("login")}>
                  LOG IN
                </button>
                <button onClick={() => setTab("register")}>REGISTER</button>
              </>
            ) : (
              <>
                <button onClick={() => setTab("login")}>LOG IN</button>
                <button className={styles.selectedTab} onClick={() => setTab("register")}>
                  REGISTER
                </button>
              </>
            )}
          </nav>
        </section>

        {activeTab === "login" ? <Login /> : <Register />}
      </main>
    </div>
  );
};

export default Authentication;
