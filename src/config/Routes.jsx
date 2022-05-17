import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Routes = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path='/Login' component={Login}/>
     
    <>
    <Header />
    <Route exact path="/" component={Home} />
    <Footer/>
    </>

    
    </Switch>
  );
};

export default Routes;
