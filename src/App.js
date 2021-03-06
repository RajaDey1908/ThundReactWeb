import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import { connect } from 'react-redux'
import * as actionType from './store/index'


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./Layouts/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./Components/Pages/Login'));
const Register = React.lazy(() => import('./Components/Pages/Register'));
const Page404 = React.lazy(() => import('./Components/Pages/Page404'));
const Page500 = React.lazy(() => import('./Components/Pages/Page500'));

class App extends Component {

  componentDidMount(){
    this.props.authenticationCheck();
  }

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticationCheck: () => dispatch(actionType.authCheckStatus()),
  }
}

export default connect(null, mapDispatchToProps)(App);
