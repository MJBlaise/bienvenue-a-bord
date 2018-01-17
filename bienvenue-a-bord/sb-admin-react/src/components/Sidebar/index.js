import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }
  /* Création du composant */
  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-home fa-fw" /> &nbsp;Accueil
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/Blank'); }} >
                <i className="fa fa-plane fa-fw" /> &nbsp;Mes voyages
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Mon voyages actuel
              </a>
            </li>    

          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
