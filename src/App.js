import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Join from "./components/join/Join";
import Chat from "./components/chat/Chat";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Switch>
  </Router>
);

export default App;
