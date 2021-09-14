import React , { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/loginComponent'
import Homeheader from "./Components/homeHeader"
import NotFound from './Components/NotFoundPage'
import HomePage from './Components/homeBody'
import Footer from './Components/footer'
import LeaderBoard from './Components/LeaderBoard'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import { handleInitialData } from './Store/Actions/index'
import { connect } from "react-redux";
import NewPoll from "./Components/NewPoll";

class App extends Component{

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {  
    
    console.log(this.props)

  return (
    <Router>
      <Fragment>
        <div className = "container">
        <Homeheader />
							<div className="main-content"> 
								<Switch>
									<Route path="/" exact component={Login}/> 
                  <ProtectedRoute path="/newpoll" exact component={NewPoll} />
                  <ProtectedRoute path="/leaderboard" exact component={LeaderBoard} />
                  <ProtectedRoute path="/home" exact component={HomePage} />
                  <Route path="/*" component={NotFound} />
								</Switch>
							</div>
        <Footer />
        </div>
      </Fragment>
    </Router>
  )}}

export default connect()(App);
