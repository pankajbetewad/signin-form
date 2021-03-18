import React, { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//router
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
//components
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './config/firebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/signin' component={Signin}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/*' component={PageNotFound}></Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
