import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Addwinery from "./Addwinery";
import Business from "./Business";
import Navibar from "./Navbar/Navibar"
import TitleBanner from "../components/Jumbotron/TitleBanner";
import Userprofile from "../components/Userprofile/Userprofile"

function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <Navibar />
            <TitleBanner />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/userprofile" component={Userprofile} />
              <PrivateRoute path="/addwinery" component={Addwinery} />
              <Route path="/business" component={Business}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
    </>
  )
}

export default App
