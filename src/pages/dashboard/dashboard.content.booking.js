import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func, string } from 'prop-types';

import { handleDataContent } from './dashboard.action';

const BOOKING = 'booking';

class DashboardContenBooking extends Component {
  static propTypes = {
    handleBookingAll: func.isRequired,
    bookingAll: array.isRequired,
    
  }

  componentDidMount() {
    this.props.handleBookingAll(BOOKING);
  }

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
                <th>OwnerID</th>
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
                <th><button type="button" className="btn btn-outline-light text-dark">#</button></th>
                <th><input type="text" /></th>
                <th>
                  <select>
                    <option>Success</option>
                    <option>Cancel</option>
                  </select>
                </th>
              </tr>
              {this.props.bookingAll.map((content) => {
                
                return (
                  <tr>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#modalFieldInfor"
                        className="btn btn-link"
                      >{content.bookingID}
                      </button>
                    </td>
                    
                    <td>{content.fieldName}</td>
                    <td>{content.ownerID}</td>
                    <td>{`${content.time.hour} : ${content.time.minute} 
                        - ${content.time.date}.${content.time.month}.${content.time.year}`}
                    </td>
                    <td>{content.duration}</td>
                    <td>
                      <button
                        type="button"

                        data-toggle="modal"
                        data-target="#modalHistoryBooking"
                        className="btn btn-link"
                      >{content.userID}
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"

                        data-toggle="modal"
                        data-target="#modalHistoryStatus"
                        className="btn btn-link"
                      >{content.status ? content.status : 'booked'}
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
    bookingAll: state.dashboardReducer.bookingAll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleBookingAll: handleDataContent(dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContenBooking);

// // eslint-disable-next-line
// class TableRow extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td>
//           <button
//             type="button"
//             data-toggle="modal"
//             data-target="#modalFieldInfor"
//             className="btn btn-link"
//           >{this.props.bookingID}
//           </button>
//         </td>
//         <td>{this.props.name}</td>
//         <td>{this.props.email}</td>
//         <td>{this.props.price}</td>
//         <td>{this.props.time}</td>
//         <td>
//           <button
//             type="button"

//             data-toggle="modal"
//             data-target="#modalHistoryBooking"
//             className="btn btn-link"
//           >View
//           </button>
//         </td>

//         <td>
//           <button
//             type="button"

//             data-toggle="modal"
//             data-target="#modalHistoryStatus"
//             className="btn btn-link"
//           >{this.props.status}
//           </button>
//         </td>
//       </tr>
//     );
//   }
// }


// {this.props.bookingAll.map((content) => {
//   return (<TableRow
//     name={content.otherName}
//     email={content.email}
//     price={content.totalPrice}
//     time={`${content.time.hour} : ${content.time.minute}
//      - ${content.time.date}.${content.time.month}.${content.time.year}`}
//     bookingID={content.ID}
//     status={content.status ? content.status : 'booked'}
//     key={content.ID}
//   />);
//   })}
