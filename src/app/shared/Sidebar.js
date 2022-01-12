import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';


class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.png")} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.png" )} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <div onClick={() => Auth.signOut()} >
                    <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                      <Trans >Sign Out</Trans>
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
      
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-wallet menu-icon"></i>
              <span className="menu-title"><Trans>Wallet</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>My Wallets</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Create New</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title"><Trans>News</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.formElementsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements"><Trans>Stock Market</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);