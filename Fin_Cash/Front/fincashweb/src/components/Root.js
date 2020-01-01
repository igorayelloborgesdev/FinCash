import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const Root = ({ store }) => (
  
  <div>
    <Provider store={store}>      
        <Router>
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>      
    </Provider>
  </div>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;