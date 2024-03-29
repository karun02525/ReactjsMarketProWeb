import React from 'react';
import OTP from './components/authentication/otp'
import VerifyOTP from './components/authentication/otpverity'
import VenderRegister from './components/authentication/register/'
import LoginView from './components/authentication/login_view'
import Dashboard from './components/dashboard'
import Category from './components/category/'
import ShopRegister  from './components/shop_register/'
import Footer from './components/menu/Footer'
import Error404 from './components/menu/Error404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route path="/login" component={LoginView} />
        <Route path="/otp" component={OTP} />
        <Route path="/verifyotp" component={VerifyOTP} />
        <Route path="/register" component={VenderRegister} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/category" component={Category} />
        <Route path="/shopregister" component={ShopRegister} />
        <Route path="/404" component={Error404} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App;
