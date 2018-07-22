import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

import { userActive } from './dashboard.action';


class DashboardModelStatus extends Component {
    static propTypes = {
      userID: string.isRequired,
      userActive: func.isRequired,
    }

    userActive = (userID, action) => {
      this.props.userActive(userID, action);
    }


    render() {
      return (
        <div className="modal fade" id="modalHistoryStatus">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">User Status</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <button
                  type="button"
                  onClick={() => { this.userActive(this.props.userID, 'active'); }}
                  className="btn btn-success btn-block"
                >
                  Active
                </button>
                <button
                  type="button"
                  onClick={() => { this.userActive(this.props.userID, 'banded'); }}
                  className="btn btn-basic btn-block"
                >
                  Banded
                </button>
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
    userActive: userActive(dispatch),
  };
}


export default connect(mapStateToProp, mapDispatchToProps)(DashboardModelStatus);

