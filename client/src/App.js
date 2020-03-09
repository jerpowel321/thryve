import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NutritionSearch from "./pages/NutritionSearch"

function App() {
  return (
    <Router>
    <Route exact path="/" component={NutritionSearch}/>
    </Router>
  );
}

export default App;
