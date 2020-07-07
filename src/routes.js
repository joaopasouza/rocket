import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={Todos} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Routes;
