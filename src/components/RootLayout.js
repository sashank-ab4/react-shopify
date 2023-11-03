import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";
import store from "../store/store";
import { Provider } from "react-redux";

export const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};
