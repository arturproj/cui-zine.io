import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from './components/navbar';
import Footer from './components/footer';

import HomePage from './home';
import Equipe from './equipe';
import Blog from './blog';
import Contact from './contact';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(    
          
  <React.StrictMode> 
    <NavBar />  

    <Router>
      <Switch>      
      <Route path="/contact">   
        {/* // \src\contact.js */}       
          <Contact />
        </Route>,
        <Route path="/blog">   
        {/* // \src\blog.js */}       
          <Blog />
        </Route>,
        <Route path="/equipe">   
          {/* // \src\equipe.js */}       
            <Equipe />
        </Route>,
        <Route path="/">  
        {/* // \src\home.js */}       
          <HomePage />
        </Route>
      </Switch>
    </Router>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
