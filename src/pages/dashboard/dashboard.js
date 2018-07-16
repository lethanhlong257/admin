import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { string } from 'prop-types';

import DashboardTitle from './dashboard.title';
import DashboardVerticalMenu from './dashboard.verticleMenu';
import DashboardContentDashboard from './dashboard.contentDashboard';
import DashboardContentUsers from './dashboard.content.users';
import DashboardContentPlayfields from './dashboard.content.playfields';
import DashboardContentBooking from './dashboard.content.booking';
import DashboardContentPost from './dashboard.content.post';

class Dashboard extends Component {
  static propTypes = {
    handleContent: string.isRequired,
  }
    contentRender = () => {
      const type = this.props.handleContent;
      switch (type) {
        case 'dashboard':
          return <DashboardContentDashboard />;
        case 'user':
          return <DashboardContentUsers />;
        case 'playfield':
          return <DashboardContentPlayfields />;
        case 'booking':
          return <DashboardContentBooking />;
        case 'post':
          return <DashboardContentPost />;
        default:
          return <DashboardContentDashboard />;
      }
    }


    render() {
      return (
        <div className="container-fluid">
          <Row>
            <DashboardTitle />
          </Row>

          <hr className="dashboard-bar" />

          <Row>
            <Col className="dashboard-vertical-menu" md={3}>
              <DashboardVerticalMenu />
            </Col>

            <Col md={9}>
              {this.contentRender()}
            </Col>
          </Row>


          <Row className="dashboard-footer">
                    Footer of dashboard
          </Row>
        </div>
      );
    }
}


function mapStateToProp(state) {
  return {
    handleContent: state.dashboardReducer.contentType,
  };
}


// function mapDispatchToProps(dispatch) {
//   return {

//   };
// }


export default connect(mapStateToProp)(Dashboard);
