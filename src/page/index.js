import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './home';
import User from './user';


function AppRouter() {
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
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/users/" component={User} />
      </div>
    </Router>
  );
}

export default AppRouter;
