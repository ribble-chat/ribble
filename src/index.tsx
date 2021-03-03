import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import RecoilLogger from "recoil-logger";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import Modal from "react-modal";
import RelayEnvironment from "./relay";
import { Loading } from "components";

Modal.setAppElement("#root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <Suspense fallback={<Loading />}>
            <RecoilLogger />
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
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
