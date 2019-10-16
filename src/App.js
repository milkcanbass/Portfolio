import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
  );
};

export default App;
