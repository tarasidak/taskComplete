import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import AppFirstPage from '../appFirstPage';
import AppSecondPage from '../appSecondPage';
import SearchAppBar from '../header/index';
import InfoParent from '../infoParent/index';
import {ADMIN} from "../../userRoleReducer";

const ErrorPage = () => (
  <div>
    <h1>Access denied!</h1>
  </div>
);

const App = (props) => {
  return(
        <Router>
          <SearchAppBar />
            <Switch>
                <Route exact path="/" component={AppFirstPage} />
                <Route path="/additem" component={AppSecondPage}>
                  {props.userRole === ADMIN ? <AppSecondPage /> : <Redirect to="/notFound" />}
                </Route>
                <Route path="/notFound" component={ErrorPage} />
            </Switch>
          <InfoParent />
        </Router>
    )
};

const mapStateToProps = (state) => ({
  userRole: state.userRole.userRole
});

export default connect(mapStateToProps)(App);