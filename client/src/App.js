import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import Books from "./pages/Books";
import Nav from "./components/Nav/index";

import './App.css';
//react access the api key in the .env
// process.env.REACT_APP_API_KEY

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
       <Route exact path={["/", "/books"]}>
        <Books /> 
      </Route>
       <Route exact path="/savedbooks">
         <SavedBooks />
       </Route>
      </Switch>
    </div>
    </Router>
 );
}

export default App;
