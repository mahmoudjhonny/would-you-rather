import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../Store/Actions/authedUser'

    var colors = {
        "nav-color" : "#e3f2fd"
    }

class homeHeader extends Component {

    handleLogOut = () => {
        this.props.dispatch(loginUser(null))
    }

    render(){

        const { nameOfUser , userImage } = this.props
        console.log(this.props)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style = {{backgroundColor: colors['nav-color']}}>
                <div className="container-fluid">
                    <div className="navbar-brand" href="#">Would-You-Rather Game</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to = "/home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/newpoll" className="nav-link">New Poll</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/leaderboard" className="nav-link">Leader Board</Link>
                            </li>
                            
                        </ul>
                        <div className="nav-item m-2">
                                <img className="m-1" src={userImage} style={{ width: 30 , height: 30 }} alt ={nameOfUser}/>
                                <span>Hey, {nameOfUser} !</span>
                            </div>
                            <Link to="/" className="btn btn-outline-success" onClick = {this.handleLogOut}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg> Log out
                            </Link>
                    </div>
                </div>
            </nav>
        </div>
    )}}

const mapStateToProps = ({ users, auth }) => {
    const user = users[auth];
    return {
        nameOfUser: user ? user["name"] : '',
        userImage: user ? user['avatarURL'] : ''
    }
}

export default connect(mapStateToProps)(homeHeader)