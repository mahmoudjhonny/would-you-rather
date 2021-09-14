import React , { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../Store/Actions/authedUser'
import { Redirect, withRouter } from 'react-router-dom'
import LoginHeader from './loginHeader'

class LoginComponent extends Component{

    state = {
		Id: null,
		ToHome: false
	}
	
	handleSelectionChanged = (e) => {
		const Id = e.target.value
		this.setState((prevState) => {
		  return {
			...prevState,
			Id,
		  };
		});
	}

	
	handleLogin = (e) => {
		const { Id } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();
	
		dispatch(loginUser(Id));
	
		this.setState((prevState) => {
		  return {
			...prevState,
			ToHome: true
		  };
		});
	}

    render() {
		const { Id, ToHome } = this.state
		const { users } = this.props;
		const { from } = this.props.location.state || { from: { pathname: '/home'}}
		const selected = Id ? Id : -1

		if(ToHome) {
			return <Redirect to={from} />
		}
	
    return (
		<div>
        <div id="container" className="container border border-primary mt-2 pt-3">
        <div className="row">
            <div className="col-sm-10 offset-sm-1 text-center">
                <LoginHeader />
                <div className="info-form .w-100">
                    <form className="form-inline justify-content-center p-4">
                        <div className="form-group">
                            <select id="itemSelect" value={selected} className="form-select .w-100" onChange={(event) => this.handleSelectionChanged(event)}>
                            <option value="-1" defaultValue>Select user...</option>
								{Object.keys(users).map((key) => {
									return (
										<option value={users[key].id} key={key}>
											{users[key].name}
										</option>
									);
								})}
                            </select>
                        </div>
                        <br />
                        <div className="d-grid">
                            <button disabled = {Id === null} 
							id="btn_submit" 
							className="btn btn-primary" 
							type="submit" 
							onClick={(e) => this.handleLogin(e)}>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
	</div>
    )}}

const mapStateToProps = (state) => {  
        return {
          users: state.users
        };
      }

export default withRouter(connect(mapStateToProps)(LoginComponent))