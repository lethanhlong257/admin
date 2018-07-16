import React, { Component } from 'react';
import { connect } from 'react-redux';


class DashboardContentPost extends Component {
  render() {
    return (
      <div className="dashboard-content-dashboard-wrap">
        <h1 className="dashboardContent-title">Post</h1>
        <hr />
        <div className="dashboard-horizontal-scrollable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Anwsers</th>
                <th>Views</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><input type="text" /></th>
                <th><input type="text" /></th>
                <th><input type="text" /></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th><button type="button" className="btn btn-outline-light text-dark">Sort</button></th>
                <th>
                  <select>
                    <option>Active</option>
                    <option>Banded</option>
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
                <td>title</td>
                <td>lethanhlong</td>
                <td>20</td>
                <td>10</td>
                <td>23/07/2018</td>
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


export default connect()(DashboardContentPost);

