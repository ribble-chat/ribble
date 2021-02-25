import { Login, Register } from "components/auth";
import { Tabs, Tab } from "components/tabs";
import styles from "./Authentication.module.scss";

const Authentication: React.FC = () => {
  return (
    <div id={styles.background}>
      <main id={styles.formBackground}>
        <section id={styles.navigation}>
          <h2 id={styles.ribbleTitle}>Ribble</h2>
          <Tabs>
            <Tab title="login">
              <Login />
            </Tab>
            <Tab title="register">
              <Register />
            </Tab>
          </Tabs>
        </section>
      </main>
    </div>
  );
};

export default Authentication;
