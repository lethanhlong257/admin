import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';

class DashboardContentTabTable extends Component {
  static propTypes = {
    typeTable: string.isRequired,
    count: number.isRequired,
  }
  color(typeTable) {
    switch (typeTable.toLowerCase()) {
      case 'user':
        return {
          panelHeaderColor: 'dashboard-primary-color panel-heading',
          panelIcon: 'fas fa-user',
          panelFooter: 'panel-footer border-primary',
        };

      case 'playfield':
        return {
          panelHeaderColor: 'dashboard-red-color panel-heading',
          panelIcon: 'fa fa-tasks',
          panelFooter: 'panel-footer border-red',
        };

      case 'booking':
        return {
          panelHeaderColor: 'dashboard-yellow-color panel-heading',
          panelIcon: 'fas fa-address-book',
          panelFooter: 'panel-footer border-yellow',

        };

      case 'post':
        return {
          panelHeaderColor: 'dashboard-green-color panel-heading',
          panelIcon: 'fas fa-clipboard',
          panelFooter: 'panel-footer border-green',

        };

      default:
        return {
          panelHeaderColor: 'dashboard-primary-color panel-heading',
          panelIcon: 'fas fa-user',
          panelFooter: 'panel-footer border-primary',
        };
    }
  }

  render() {


    return (
      <div className="col-lg-3 col-md-6">
        <div className="panel panel-primary">
          <div className={this.color(this.props.typeTable).panelHeaderColor}>
            <div className="row">
              <div className="col-xs-3 dashboard-icon-big">
                <i className={this.color(this.props.typeTable).panelIcon} />
              </div>
              <div className="col-xs-9 text-right">
                <div className="huge">{this.props.count}</div>
                <div>{this.props.typeTable}</div>
              </div>
            </div>
          </div>
          <div>
            <div className={this.color(this.props.typeTable).panelFooter}>
              <span className="pull-left">View Details </span>
              <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect()(DashboardContentTabTable);

