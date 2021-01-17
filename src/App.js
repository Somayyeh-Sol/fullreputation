import "./App.css";
import Landing from "./components/Landing";
import MyReputation from "./components/MyReputation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Login To Your Reputationair!</p>
      </header>

      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route
            path="/user-reputation/:reputation/name/:name/email/:email/picture/:picture"
            component={MyReputation}
          />
        </Switch>
      </Router>

      <footer className="App-footer">
        <p>Copyrighted by Somayyeh Soleymanzadeh</p>
      </footer>
    </div>
  );
}

export default App;
