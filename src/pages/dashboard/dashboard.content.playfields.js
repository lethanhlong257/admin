import React, { Component } from 'react';
import { connect } from 'react-redux';


class DashboardContenPlayfields extends Component {
  render() {
    return (
      <div className="dashboard-content-dashboard-wrap">
        <h1 className="dashboardContent-title">Playfields</h1>
        <hr />

        <div className="dashboard-horizontal-scrollable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Owner</th>
                <th>Price</th>
                <th>Created Date</th>
                <th>History of Booking</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><input type="text" /></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><input type="text" /></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th>#</th>
                <th>#</th>
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
                  >Active
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


export default connect()(DashboardContenPlayfields);

