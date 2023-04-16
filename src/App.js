import './App.scss';
import Header from './containers/Header/header';
import Home from './containers/Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './containers/About/about';
import Signup from './containers/Authentication/signup';
import CompletePhoneSignup from './containers/Authentication/completePhoneSignup';
import React from 'react';
import Login from './containers/Authentication/login';
import UserProfile from './containers/User/userProfile';

function App() {
  // const isLoggedIn = useSelector(redux => redux.authInfo.isLoggedIn)

  return (
    <div style={{height:'100%'}}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/complete_phone_signup' element={<CompletePhoneSignup />} />
          <Route exact path='/profile' element={<UserProfile />} />
          {/* <Route path="/blog/:slug">
            <BlogPost />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
