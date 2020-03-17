import React from 'react';
import './App.css';
import Heder from './Component/Heder/Heder';
import Shop  from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Review from './Component/Review/Review';
import Manage from './Component/Manage/Manage';
import Notfound from './Component/NotFound/Notfound';
import Productdtaile from './Component/Productdtaile/Productdtaile';

function App() {
  return (
    <div>
      <Heder></Heder>
      <Router>
        <Switch>
          <Route path='/shop' >
          <Shop></Shop>
          
          </Route>
          <Route path='/review'>
            <Review></Review>

          </Route>
          <Route path='/manage'>
            <Manage></Manage>
            

          </Route>

          <Route exact path='/' > 
          <Shop></Shop>

          </Route>
          <Route path='/product/:productkey'>
            <Productdtaile></Productdtaile>

          </Route>
          <Route path="*" >
            <Notfound></Notfound>

          </Route>

        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
