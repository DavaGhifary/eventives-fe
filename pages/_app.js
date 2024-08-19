import React from "react";
import { Provider } from "react-redux";
import { CContainer } from "@coreui/react";
import NextNProgress from "nextjs-progressbar";

import { AppSidebar, AppHeader, AppFooter } from "./../src/components/index";
import store from "../store/index";

import "../styles/globals.css";
import "../src/scss/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress color="#3399ff" showOnShallow={true} />
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg className="mb-4">
            <Component {...pageProps} />
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </Provider>
  );
}

export default MyApp;
