import React from "react";
// Translation with i18n
import { withTranslation } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom components (menu: nav and sidebar)
import NavigationMenu from "./components/NavigationMenu"
import Footer from './components/Footer'
// Pages
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ExamplePage from './pages/ExamplePage';
// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import PageviewIcon from '@material-ui/icons/Pageview';
import DashboardIcon from '@material-ui/icons/Dashboard';
// get local from root
import logo from './logo.svg'
import MyBackgroundImg from './opacity-70-food-background.png'

function App(props) {
  // custom hook to call i18n changeLanguage function
  const { t } = props;
  const langCallback = (event) => {
    let newLang = event.target.value;
    props.i18n.changeLanguage(newLang)
  }

  const navMenuRouteData = [
    { text: t('navMenu.home'), link: '/', iconFunc: () => { return <HomeIcon /> } },
    { text: t('navMenu.pageOne'), link: "/pageOne", iconFunc: () => { return <PageviewIcon /> } },
    { text: t('navMenu.pageTwo'), link: "/pageTwo", iconFunc: () => { return <DashboardIcon /> } } 
  ];
  
  return (
    <HashRouter initialEntries={['/drafts']} initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavigationMenu
          routeData={navMenuRouteData}
          logo={logo}
          langCallback={langCallback}
          registerText={t('navMenu.register')}
          signInText={t('navMenu.signIn')}
        >
          <Route exact path="/" render={(props) => <HomePage {...props} t={t} MyBackgroundImg={MyBackgroundImg} /> } />
          <Route path="/pageOne" render={(props) => <ExamplePage {...props} t={t} /> } />
          <Route path="/pageTwo" render={(props) => <ExamplePage {...props} t={t} /> } />
          <Route path="/signin" render={(props) => <SigninPage {...props} t={t} /> } />
          <Route path="/register" render={(props) => <RegisterPage {...props} t={t} /> } />
          <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} t={t} /> } /> 
          <Footer />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}

export default withTranslation()(App);