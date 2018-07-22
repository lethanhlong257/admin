import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boolean } from 'prop-types';


class DashboardModelStatus extends Component {
    static propTypes = {

    }
    render() {
      const { user } = this.props;
      return (
        <div className="modal fade" id="modalUserInfor">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">User Information</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Address:</strong>  {user.address}</p>
                <p><strong>Phone:</strong>  {user.phone}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Status: </strong>{user.status}  </p>
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


function mapStateToProp(state) {
  return {

  };
}


function mapDispatchToProps(dispatch) {
  return {

  };
}


export default connect(mapStateToProp, mapDispatchToProps)(DashboardModelStatus);

