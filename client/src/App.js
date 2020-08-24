import React from 'react';
import Books from "./pages/Books";
import Nav from "./components/Nav/index";

import './App.css';
//react access the api key in the .env
// process.env.REACT_APP_API_KEY

function App() {
  return (
    <div>
    {/* console.log(process.env.REACT_APP_API_KEY); */}
      <Nav />
      <Books /> 
    </div>
 );
}

export default App;
