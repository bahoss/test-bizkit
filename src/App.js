import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//routes
import PrivateRouter from './routes/PrivateRouter';

//pages
import Auth from './pages/Auth';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRouter path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
