import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';

import { handleDataContent } from './dashboard.action';

const PLAYFIELD = 'playfield';
class DashboardContenPlayfields extends Component {
  static propTypes = {
    handlePlayfieldAll: func.isRequired,
    playfieldAll: array.isRequired,
  }
  componentDidMount() {
    this.props.handlePlayfieldAll(PLAYFIELD);
  }
  render() {
    console.log(this.props.playfieldAll);
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

              {this.props.playfieldAll.map((content) => {
                return (
                  <tr>
                    <th>
                      <button
                        type="button"

                        data-toggle="modal"
                        data-target="#modalFieldInfor"
                        className="btn btn-link"
                      >{content.ID}
                      </button>
                    </th>
                    <td>{content.typeOfField}</td>
                    <td>{content.ownerID}</td>
                    <td>{content.price}</td>
                    <td>N/A</td>
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
                      >{content.status ? content.status : 'actived'}
                      </button>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    playfieldAll: state.dashboardReducer.playfieldAll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handlePlayfieldAll: handleDataContent(dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContenPlayfields);

