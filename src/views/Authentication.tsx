import { Login, Register } from "components/auth";
import { Tabs, Tab } from "components/tabs";
import styles from "./Authentication.module.scss";

const Authentication: React.FC = () => {
  return (
    <div className={styles.background}>
      <main className={styles.formBackground}>
        <section className={styles.navigation}>
          <h2 className={styles.ribbleTitle}>Ribble</h2>
          <Tabs>
            <Tab title="Login">
              <Login />
            </Tab>
            <Tab title="Register">
              <Register />
            </Tab>
          </Tabs>
        </section>
      </main>
    </div>
  );
};

export default Authentication;
