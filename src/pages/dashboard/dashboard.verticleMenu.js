import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { handleUserContent, handleBookingContent, handleDashboardContent, handlePlayfieldContent, handlePostContent } from './dashboard.action';


class DashboardVerticleMenu extends Component {
  static propTypes = {
    handleBookingContent: func.isRequired,
    handleDashboardContent: func.isRequired,
    handlePlayfieldContent: func.isRequired,
    handlePostContent: func.isRequired,
    handleUserContent: func.isRequired,
  }

  handleUserContent = () => {
    this.props.handleUserContent();
  }
  handleDashboardContent = () => {
    this.props.handleDashboardContent();
  }
  handleBookingContent = () => {
    this.props.handleBookingContent();
  }
  handlePlayfieldContent = () => {
    this.props.handlePlayfieldContent();
  }
  handlePostContent = () => {
    this.props.handlePostContent();
  }

  render() {
    return (
      <div className="dashboard-vertical-menu-wrap">
        <nav className="navbar bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={this.handleDashboardContent}
              ><i className="fas fa-tachometer-alt" /> Dashboard
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={this.handleUserContent}
              > <i className="fas fa-user" /> User
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={this.handlePlayfieldContent}
              ><i className="fa fa-tasks" /> Playfields
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={this.handlePostContent}
              ><i className="fas fa-clipboard" /> Post
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                onClick={this.handleBookingContent}
              ><i className="fas fa-address-book" /> Booking
              </button>
            </li>

          </ul>
        </nav>
      </div>

    );
  }
}


function mapStateToProp(state) {
  return {
    contentType: state.dashboardReducer.contentType,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    handleUserContent: handleUserContent(dispatch),
    handleDashboardContent: handleDashboardContent(dispatch),
    handlePlayfieldContent: handlePlayfieldContent(dispatch),
    handleBookingContent: handleBookingContent(dispatch),
    handlePostContent: handlePostContent(dispatch),

  };
}


export default connect(mapStateToProp, mapDispatchToProps)(DashboardVerticleMenu);

