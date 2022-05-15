import "./App.scss";
import Main from "./pages/main/Main";
import Jarvis from "./pages/jarvis/Jarvis";
import Awesomo from "./pages/awesomo/Awesomo";
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
            path="/awesomo"
            exact
            render={(routerProps) => <Awesomo {...routerProps} />}
          />
          <Route
            path="/jarvis"
            exact
            render={(routerProps) => <Jarvis {...routerProps} />}
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
