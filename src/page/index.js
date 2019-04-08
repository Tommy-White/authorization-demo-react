import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import authorizationHOC from '../authorizationHOC';
import Home from './home';
import User from './user';
import Charts from './charts'

const UserAuthorized = authorizationHOC(User, ['user', 'admin'])
const ChartsAuthorized = authorizationHOC(Charts, ['charts', 'admin'])

function AppRouter({owned}) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/">User</Link>
            </li>
            <li>
              <Link to="/charts/">charts</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/users/"
          component={() => <UserAuthorized owned={owned}/>} />
        <Route path="/charts/"
          component={() => <ChartsAuthorized owned={owned}/>} />
      </div>
    </Router>
  );
}

export default AppRouter;
