import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend } from 'recharts';
import { array, func } from 'prop-types';

import { handleTop10 } from './dashboard.action';

class DashboardChartTime extends Component {
  static propTypes = {
    top10Booking: array.isRequired,
    handleTop10: func.isRequired,
  }

  componentDidMount() {
    this.props.handleTop10();
  }

  render() {
    return (
      <div className="dashboard-chart-time-wrap">
        <div className="card">
          <div className="card-header">
            <i className="fas fa-chart-bar" /> <strong>Top 10 booking</strong>
          </div>
          <div className="card-body">

            <BarChart width={700} height={350} data={this.props.top10Booking}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#337ab7" />
            </BarChart>

          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProp(state) {
  return {
    top10Booking: state.dashboardReducer.top10Booking,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    handleTop10: handleTop10(dispatch),
  };
}

export default connect(mapStateToProp, mapDispatchToProps)(DashboardChartTime);

