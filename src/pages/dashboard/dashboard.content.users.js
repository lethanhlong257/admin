import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';

import DashboardModelHistoryBooking from './dashboard.model.historyBooking';
import DashboardModelHistoryPost from './dashboard.model.historyPost';
import DashboardModelStatus from './dashboard.model.status';
import DashboardModelUserInfor from './dashboard.model.userInfor';
import {
  handleDataContent,
  handleUserInforByID,
  handleModelHistoryBooking,
  handleModelUserActive,
} from './dashboard.action';


const USER = 'user';

class DashboardContentUsers extends Component {
  static propTypes = {
    handleUserAll: func.isRequired,
    userAll: array.isRequired,
    handleUserInforByID: func.isRequired,
    user: func.isRequired,
    handleModelHistoryBooking: func.isRequired,
    historyBooking: array.isRequired,
    handleModelUserActive: func.isRequired,
    userID: string.isRequired,
  }

  handleModelHistoryBooking = (ID) => {
    this.props.handleModelHistoryBooking(ID);
  }

  handleModelHistoryPost = () => {

  }

  handleModelUserActive = (ID) => {
    this.props.handleModelUserActive(ID);
  }

  handleModelHistoryUserInfor = (ID) => {
    this.props.handleUserInforByID(ID);
  }

  componentDidMount() {
    this.props.handleUserAll(USER);
  }

  render() {
    return (
      <div className="dashboard-content-dashboard-wrap">
        <h1 className="dashboardContent-title">Users</h1>
        <hr />

        <div className="dashboard-horizontal-scrollable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Created Date</th>
                <th>History of Booking</th>
                <th>History of Post</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><input type="text" /></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><input type="text" /></th>
                <th><input type="text" /></th>
                <th><input type="text" /></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th>#</th>
                <th>#</th>
                <th>#</th>
              </tr>

              {this.props.userAll.map((content) => {
                return (
                  <tr>
                    <th>
                      <button
                        type="button"
                        onClick={() => { return this.handleModelHistoryUserInfor(content.ID); }}
                        data-toggle="modal"
                        data-target="#modalUserInfor"
                        className="btn btn-link"
                      >{content.ID}
                      </button>
                    </th>
                    <td>{content.username}</td>
                    <th>{content.email}</th>
                    <th>{content.name}</th>
                    <th>{content.phone}</th>
                    <th>{content.date}</th>
                    <th>
                      <button
                        type="button"
                        onClick={() => { return this.handleModelHistoryBooking(content.ID); }}
                        data-toggle="modal"
                        data-target="#modalHistoryBooking"
                        className="btn btn-link"
                      >View
                      </button>
                    </th>
                    <th>
                      <button
                        type="button"
                        
                        data-toggle="modal"
                        data-target="#modalHistoryPost"
                        className="btn btn-link"
                      >View
                      </button>
                    </th>
                    <td>
                      <button
                        type="button"
                        onClick={() => { return this.handleModelUserActive(content.ID); }}
                        data-toggle="modal"
                        data-target="#modalHistoryStatus"
                        className="btn btn-link"
                      >{content.status ? content.status : 'actived'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <DashboardModelHistoryBooking historyBooking={this.props.historyBooking} />
          <DashboardModelHistoryPost />
          <DashboardModelStatus userID={this.props.userID} />
          <DashboardModelUserInfor user={this.props.user} />

        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    userAll: state.dashboardReducer.userAll,
    user: state.dashboardReducer.userByID,
    historyBooking: state.dashboardReducer.historyBooking,
    userID: state.dashboardReducer.userID,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUserAll: handleDataContent(dispatch),
    handleUserInforByID: handleUserInforByID(dispatch),
    handleModelHistoryBooking: handleModelHistoryBooking(dispatch),
    handleModelUserActive: handleModelUserActive(dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContentUsers);

