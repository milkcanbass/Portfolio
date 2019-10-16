import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/pages/landing/landing.component';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default App;
