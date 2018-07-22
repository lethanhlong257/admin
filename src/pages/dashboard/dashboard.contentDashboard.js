import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number } from 'prop-types';

import DashboardContentTabTable from './dashboard.contentDashboard.tabTable';
import DashboardChartTime from './dashboard.chart.time';
import DashboardChartTop from './dashboard.chart.top';
import DashboardTableUnapproved from './dashboard.table.unapproved';
import { handleCount } from './dashboard.action';

const USER = 'user';
const PLAYFIELD = 'playfield';
const POST = 'post';
const BOOKING = 'booking';

class DashboardContentDashboard extends Component {
  static propTypes = {
    handleCount: func.isRequired,
    bookingCount: number.isRequired,
    userCount: number.isRequired,
    playfieldCount: number.isRequired,
    postCount: number.isRequired,
  }

  componentDidMount() {
    this.props.handleCount(USER);
    this.props.handleCount(PLAYFIELD);
    this.props.handleCount(POST);
    this.props.handleCount(BOOKING);
  }

  render() {
    return (
      <div className="dashboard-content-dashboard-wrap">
        <h1 className="dashboardContent-title">Dashboard</h1>
        <hr />
        <div className="row">
          <DashboardContentTabTable count={this.props.userCount} typeTable="Users" />
          <DashboardContentTabTable count={this.props.playfieldCount} typeTable="Playfield" />
          <DashboardContentTabTable count={this.props.postCount} typeTable="Post" />
          <DashboardContentTabTable count={this.props.bookingCount} typeTable="Booking" />
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


function mapStateToProp(state) {
  return {
    bookingCount: state.dashboardReducer.bookingCount,
    userCount: state.dashboardReducer.userCount,
    playfieldCount: state.dashboardReducer.playfieldCount,
    postCount: state.dashboardReducer.postCount,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    handleCount: handleCount(dispatch),
  };
}


export default connect(mapStateToProp, mapDispatchToProps)(DashboardContentDashboard);

