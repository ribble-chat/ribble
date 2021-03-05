import { UtilPanel } from "components";
import { Route, Switch } from "react-router-dom";

import { ChatView } from "components/chat";
import { Contacts } from "components/contacts";
import { Preferences } from "components/preferences";
import { CenterPopup } from "components/common";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.container}>
      <UtilPanel />
      <section className={styles.currentPage}>
        <Switch>
          <Route path="/chat" component={ChatView} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
        <CenterPopup />
      </section>
    </main>
  );
};

export default Main;
