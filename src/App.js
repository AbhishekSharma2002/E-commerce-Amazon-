
import Navbar from "./Components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from "./Components/Login";
import Scrolll from "./Components/Scrolll";
import Galax from "./Components/Galax";
import FFoter from "./Components/FFoter"



function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Switch>
          <Route path="/Home">
            <Scrolll/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/more Details">
            <Galax/>
          </Route>
        </Switch> 
        <FFoter/>
      </Router>
    </>
  );
}

export default App;
