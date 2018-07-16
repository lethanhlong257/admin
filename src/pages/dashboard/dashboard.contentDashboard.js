import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardContentTabTable from './dashboard.contentDashboard.tabTable';
import DashboardChartTime from './dashboard.chart.time';
import DashboardChartTop from './dashboard.chart.top';
import DashboardTableUnapproved from './dashboard.table.unapproved';


class DashboardContentDashboard extends Component {
  render() {
    return (
      <div className="dashboard-content-dashboard-wrap">
        <h1 className="dashboardContent-title">Dashboard</h1>
        <hr />
        <div className="row">
          <DashboardContentTabTable typeTable="Users" />
          <DashboardContentTabTable typeTable="Playfield" />
          <DashboardContentTabTable typeTable="Post" />
          <DashboardContentTabTable typeTable="Booking" />
        </div>
        <hr />
        <div className="row">
          <div className="col-md-9">
            <DashboardChartTime />
            <hr />
            <DashboardChartTop />
          </div>

          <div className="col-md-3">
            <DashboardTableUnapproved />
          </div>
        </div>
      </div>

    );
  }
}


export default connect()(DashboardContentDashboard);

