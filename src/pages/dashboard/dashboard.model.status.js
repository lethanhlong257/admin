import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boolean } from 'prop-types';


class DashboardModelStatus extends Component {
    static propTypes = {

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
                  Modal body..
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

