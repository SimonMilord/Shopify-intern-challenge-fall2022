// import '@shopify/polaris/build/esm/styles.css';
// import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import "./App.scss";
import Main from "./pages/main/Main";
import Harry from "./pages/harry/Harry";
import Marv from "./pages/marv/Marv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Main {...routerProps} />}
          />
          <Route
            path="/marv"
            exact
            render={(routerProps) => <Marv {...routerProps} />}
          />
          <Route
            path="/harry"
            exact
            render={(routerProps) => <Harry {...routerProps} />}
          />
          <Route
            path="*"
            exact
            render={(routerProps) => <Main {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
