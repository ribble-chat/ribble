import { Login, Register } from "components/auth";
import { Tabs, Tab } from "components/tabs";
import { Loading } from "components";
import { Suspense } from "react";
import styles from "./Authentication.module.scss";

const Authentication: React.FC = () => {
  return (
    <div className={styles.background}>
      <main className={styles.formBackground}>
        <h2 className={styles.ribbleTitle}>Ribble</h2>
        <Tabs>
          <Tab title="LOGIN">
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
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
