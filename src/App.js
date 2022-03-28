import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
//import { Router, Route, Switch } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomepageComponent from './pages/homepage/homepage.component';
import ShopView from './pages/shop/shop.component';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomepageComponent} />
          <Route path='/shop' component={ShopView} />
        </Switch>
      </Router>
    </div>
  );
}



export default App;
