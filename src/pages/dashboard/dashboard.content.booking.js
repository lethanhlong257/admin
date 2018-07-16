import React, { Component } from 'react';
import { connect } from 'react-redux';


class DashboardContenBooking extends Component {
  render() {
    return (
      <div className="dashboard-content-dashboard-wrap">
        <h1 className="dashboardContent-title">Booking</h1>
        <hr />

        <div className="dashboard-horizontal-scrollable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Field Name</th>
                <th>Owner</th>
                <th>Time</th>
                <th>Duration</th>
                <th>User</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><input type="text" /></th>
                <th>#</th>
                <th>#</th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><input type="text" /></th>
                <th>
                  <select>
                    <option>Success</option>
                    <option>Cancel</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <button
                    type="button"

                    data-toggle="modal"
                    data-target="#modalFieldInfor"
                    className="btn btn-link"
                  >321123321
                  </button>
                </th>
                <td>lethanhlong</td>
                <td>lethanhlong@gmail.com</td>
                <td>900000</td>
                <td>23/07/2018</td>
                <td>
                  <button
                    type="button"

                    data-toggle="modal"
                    data-target="#modalHistoryBooking"
                    className="btn btn-link"
                  >View
                  </button>
                </td>

                <td>
                  <button
                    type="button"

                    data-toggle="modal"
                    data-target="#modalHistoryStatus"
                    className="btn btn-link"
                  >Success
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

    );
  }
}


export default connect()(DashboardContenBooking);

