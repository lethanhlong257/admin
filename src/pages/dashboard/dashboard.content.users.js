import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardModelHistoryBooking from './dashboard.model.historyBooking';
import DashboardModelHistoryPost from './dashboard.model.historyPost';
import DashboardModelStatus from './dashboard.model.status';
import DashboardModelUserInfor from './dashboard.model.userInfor';


class DashboardContentUsers extends Component {
  handleModelHistoryBooking = () => {
    
  }

  handleModelHistoryPost = () => {
    
  }

  handleModelHistoryActive = () => {
    
  }

  handleModelHistoryUserInfor = () => {
    
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
              <tr>
                <th>
                  <button
                    type="button"
                    onClick={this.handleModelUserInfor}
                    data-toggle="modal"
                    data-target="#modalUserInfor"
                    className="btn btn-link"
                  >321123321
                  </button>
                </th>
                <td>lethanhlong</td>
                <th>lethanhlong@gmail.com</th>
                <th>Le Thanh Long</th>
                <th>01235122388</th>
                <th>23/07/2018</th>
                <th>
                  <button
                    type="button"
                    onClick={this.handleModelHistoryBooking}
                    data-toggle="modal"
                    data-target="#modalHistoryBooking"
                    className="btn btn-link"
                  >View
                  </button>
                </th>
                <th>
                  <button
                    type="button"
                    onClick={this.handleModelHistoryPost}
                    data-toggle="modal"
                    data-target="#modalHistoryPost"
                    className="btn btn-link"
                  >View
                  </button>
                </th>
                <th>
                  <button
                    type="button"
                    onClick={this.handleModelActive}
                    data-toggle="modal"
                    data-target="#modalHistoryStatus"
                    className="btn btn-link"
                  >Active
                  </button>
                </th>
              </tr>
              <tr>
                <th><button type="button" className="btn btn-link">321123321</button></th>
                <td>lethanhlong</td>
                <th>lethanhlong@gmail.com</th>
                <th>Le Thanh Long</th>
                <th>01235122388</th>
                <th>23/07/2018</th>
                <th><button type="button" className="btn btn-link">View</button></th>
                <th><button type="button" className="btn btn-link">View</button></th>
                <th><button type="button" className="btn btn-link">Active</button></th>
              </tr>
              <tr>
                <th><button type="button" className="btn btn-link">321123321</button></th>
                <td>lethanhlong</td>
                <th>lethanhlong@gmail.com</th>
                <th>Le Thanh Long</th>
                <th>01235122388</th>
                <th>23/07/2018</th>
                <th><button type="button" className="btn btn-link">View</button></th>
                <th><button type="button" className="btn btn-link">View</button></th>
                <th><button type="button" className="btn btn-link">Active</button></th>
              </tr>
            </tbody>
          </table>

          <DashboardModelHistoryBooking />
          <DashboardModelHistoryPost />
          <DashboardModelStatus />
          <DashboardModelUserInfor />

        </div>
      </div>

    );
  }
}


export default connect()(DashboardContentUsers);

