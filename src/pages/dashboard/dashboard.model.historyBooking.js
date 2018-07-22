import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';


class DashboardModelHistoryBooking extends Component {
    static propTypes = {
      historyBooking: array.isRequired,
    }
    render() {
      return (
        <div className="modal fade" id="modalHistoryBooking">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">History Booking of user</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Email</th>
                      <th>OwnerID</th>
                      <th>Field</th>
                      <th>Phone</th>
                      <th>Time</th>
                      <th>Duration</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.historyBooking.map((historyBooking) => {
                      return (
                        <tr>
                          <td>{historyBooking.ID}</td>
                          <td>{historyBooking.email}</td>
                          <td>{historyBooking.ownerID}</td>
                          <td>{historyBooking.fieldID}</td>
                          <td>{historyBooking.phone}</td>
                          <td>{`${historyBooking.time.hour}:${historyBooking.time.minute}
                       - ${historyBooking.time.date}, ${historyBooking.time.month}, ${historyBooking.time.year}`}
                          </td>
                          <td>{historyBooking.duration}</td>
                          <td>{historyBooking.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

      );
    }
}


export default connect()(DashboardModelHistoryBooking);

