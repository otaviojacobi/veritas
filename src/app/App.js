import React, { Component } from 'react';
import { withTranslation } from "react-i18next";
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import isAuthed from './auth/isAuthed';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import SettingsPanel from './shared/SettingsPanel';
import Sidebar from './shared/Sidebar';

class App extends Component {
  state = {}
  async componentDidMount() {
    await this.onRouteChanged();
  }
  render () {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    let SettingsPanelComponent = !this.state.isFullPageLayout ? <SettingsPanel/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (
      <div className="container-scroller">
        { navbarComponent }
        <div className="container-fluid page-body-wrapper">
          { sidebarComponent }
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
              { SettingsPanelComponent }
            </div>
            { footerComponent }
          </div>
        </div>
      </div>
    );
  }

  async componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      await this.onRouteChanged();
    }
  }

  async onRouteChanged() {

    const authed = await isAuthed();

    const { i18n } = this.props;
    const body = document.querySelector('body');
    if(this.props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    }
    else {
      body.classList.remove('rtl')
      i18n.changeLanguage('en');
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/404', '/loading' ];

    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (!authed || this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

}

export default withTranslation()(withRouter(App));
