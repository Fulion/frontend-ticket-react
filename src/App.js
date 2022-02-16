import React, { useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { Entry } from "./pages/entry/Entry.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
// import { useAppContext } from "./context/AppContext";
import { Logout } from "./components/auth/Logout";
import { useSelector } from "react-redux";

function App() {
  /*   const appCtx = useAppContext();
  const { reducer } = useMemo(
    () => ({
      reducer: appCtx.reducer,
    }),
    [appCtx]
  );
  const { isLogin } = reducer; */
  const { isLogin } = useSelector((state) => state.root);

  return (
    <div className="App">
      <Router>
        {!isLogin ? (
          <Switch>
            <Route exact path="/">
              <Entry />
            </Route>
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <PrivateRoute isAuth={isLogin} path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute isAuth={isLogin} path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute isAuth={isLogin} path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute isAuth={isLogin} path="/ticket/:tid">
              <Ticket />
            </PrivateRoute>
            <Route exact path="/logout">
              <Logout />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
