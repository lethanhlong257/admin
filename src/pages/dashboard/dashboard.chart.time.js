import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { func, array } from 'prop-types';

import { handleCountBookingByHour } from './dashboard.action';

class DashboardChartTime extends Component {
  static propTypes = {
    handleCountBookingByHour: func.isRequired,
    bookingCountByHour: array.isRequired,
  }

  async componentDidMount() {

    const bookingCountByHourArray = () => {
      return (
        new Promise((resolve, reject) => {
          const countBooking = this.props.handleCountBookingByHour();
          if (countBooking === undefined) reject(Error);
          resolve(countBooking);
        })
      );
    };
    await bookingCountByHourArray();
  }

  render() {
    return (
      <div className="dashboard-chart-time-wrap">
        <div className="card">
          <div className="card-header">
            <i className="fas fa-chart-line" /> <strong>Time chart</strong>
          </div>
          <div className="card-body">

            <p>The density time that was booked a day</p>


            <AreaChart width={700} height={250} data={this.props.bookingCountByHour}>
              <defs>

                <linearGradient id="timesColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />

              <Area type="monotone" dataKey="times" stroke="#82ca9d" fillOpacity={1} fill="url(#timesColor)" />
            </AreaChart>

          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProp(state) {
  return {
    bookingCountByHour: state.dashboardReducer.bookingCountByHour,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    handleCountBookingByHour: handleCountBookingByHour(dispatch),
  };
}


export default connect(mapStateToProp, mapDispatchToProps)(DashboardChartTime);

