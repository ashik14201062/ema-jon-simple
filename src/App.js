import React, { createContext } from 'react';
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
import Login from './Component/Login/Login';
import {AuthContextProvider, PrivateRoute} from './Component/Login/UseAuth'

import Shipment from "./Component/Shipment/Shipment"





function App() {
  return (
    <div>
      <AuthContextProvider>
      
    
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
            <Route path ="/login" > 

              <Login></Login>
            </Route>
            <PrivateRoute path= "/shipment">
                  <Shipment></Shipment>

            </PrivateRoute >


            <Route path="*" >
              <Notfound></Notfound>

            </Route>

          </Switch>
        </Router>
     
        </AuthContextProvider>
      
    </div>
  );
}

export default App;
