import React from "react";
import { Route } from "react-router-dom";
import { Main } from "./Main/Main";
import { History } from "./History/History";
import { Nav } from "./Nav/Nav";

export const WorkZone = () => {
  return (
    <div>
      <Nav />

      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </div>
  );
};
