import React, { Suspense, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  RecoilRoot,
  useRecoilCallback,
  useRecoilSnapshot,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import Modal from "react-modal";
import RelayEnvironment from "./relay";
import { Loading } from "components";
import { currentGroupAtom, currentUserAtom } from "state";

function DebugObserver() {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot, previousSnapshot: _ }) => {
    function log<T>(x: T): T {
      console.log(x);
      return x;
    }

    (window as any).recoilState = {
      a: log(snapshot.getLoadable(currentUserAtom).contents),
      b: log(snapshot.getLoadable(currentGroupAtom).contents),
    };
  });

  return null;
}

Modal.setAppElement("#root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <DebugObserver />
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <Suspense fallback={<Loading />}>
            <ToastContainer />
            <App />
          </Suspense>
        </RelayEnvironmentProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();
