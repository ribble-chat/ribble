import { Login, Register } from "components/auth";
import { Tabs, Tab } from "components/tabs";
import styles from "./Authentication.module.scss";

const Authentication: React.FC = () => {
  return (
    <div className={styles.background}>
      <main className={styles.formBackground}>
        <h2 className={styles.ribbleTitle}>Ribble</h2>
        <Tabs>
          <Tab title="LOGIN">
            <Login />
          </Tab>
          <Tab title="REGISTER">
            <Register />
          </Tab>
        </Tabs>
      </main>
    </div>
  );
};

export default Authentication;
