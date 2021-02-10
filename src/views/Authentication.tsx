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
                <p
                  className={styles.selectedTab}
                  onClick={() => setTab("login")}
                >
                  LOG IN
                </p>
                <p onClick={() => setTab("register")}>REGISTER</p>
              </>
            ) : (
              <>
                <p onClick={() => setTab("login")}>LOG IN</p>
                <p
                  className={styles.selectedTab}
                  onClick={() => setTab("register")}
                >
                  REGISTER
                </p>
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
