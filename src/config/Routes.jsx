import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Movie from "../components/pages/movie/Movie";
import TV from "../components/pages/tv/TV";
import FlowLogin from "../components/pages/flowlogin/FlowLogin";
import FlowSignUp from "../components/pages/flowsignup/FlowSignUp";

const Routes = () => {
  return (
    <Switch>
      
      <>
      <Route path='/Login' component={Login}/>
      <Route path ='/Flow/Login' component={FlowLogin}/>
      <Route path='/FlowSignUp' component={FlowSignUp}/>

      </>
     
    <>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/Movie" component={Movie} />
    <Route exact path="/TV" component={TV} />
    <Footer/>
    </>

    
    </Switch>
  );
};

export default Routes;
