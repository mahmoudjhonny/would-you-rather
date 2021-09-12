import React , { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/loginComponent'
import Homeheader from "./Components/homeHeader"
// import ProtectedRoute from "./Components/ProtectedRoute";
import { connect } from "react-redux";
import { handleData } from './Store/Actions/index'

class App extends Component{

  componentDidMount() {
    this.props.dispatch(handleData())
  }

  render() {
  return (
    <Router>
      <Fragment>
        <div className = "container">
        <Homeheader />
							<div className="main-content"> 
								<Switch>
									<Route path="/" exact component={Login}/>
                    {/* <ProtectedRoute path='/dashboard' exact component={Dashboard} />
                    <ProtectedRoute path='/add' exact component={NewQuestion} />
                    <ProtectedRoute path='/question/:id' component={QuestionDetail} />
                    <ProtectedRoute path='/leaderboard' component={Leaderboard} />
                    <Route path="/not-found" component={NotFound} /> */}
								</Switch>
							</div>
        </div>
      </Fragment>
    </Router>
  )}}

export default connect()(App);
