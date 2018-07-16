import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import DashboardContentDashboard from './dashboard.contentDashboard';
import DashboardContentUser from './dashboard.content.users';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-content-wrap">
        <Switch>
          <Route exact path="/" component={DashboardContentDashboard} />
          <Route path="/admin/dashboard" component={DashboardContentDashboard} />
          <Route path="/user" component={DashboardContentUser} />
        </Switch>
      </div>
    );
  }
}


function mapStateToProp(state) {
  return {

  };
}


function mapDispatchToProps(dispatch) {
  return {

  };
}


export default connect(mapStateToProp, mapDispatchToProps)(Dashboard);
