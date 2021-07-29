import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}
