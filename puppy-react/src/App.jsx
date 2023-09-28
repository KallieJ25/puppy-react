import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllPlayers} />
        <Route path="/player/:id" component={SinglePlayer} />
      </Switch>
    </Router>
  );
}

export default App;

