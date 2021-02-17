import { useRecoilState } from "recoil";

import { userState } from "state";
import { UtilPanel } from "components";
import { Route, Switch, useHistory } from "react-router-dom";

import { Chat } from "components/chat";
import { Contacts } from "components/contacts";
import { Preferences } from "components/preferences";

import styles from "./Main.module.scss";
import { SidePanelItem } from "components/common";

const Main = () => {
  const history = useHistory();

  return (
    <main id={styles.container}>
      <Route path="/" component={UtilPanel} />
      <section id={styles.currentPage}>
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </section>
    </main>
  );
};

export default Main;
