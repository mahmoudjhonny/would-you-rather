import React , { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser , logOutUser } from '../Store/Actions/authedUser'
import LoginHeader from './loginHeader'
import Footer from './footer'

class LoginComponent extends Component{

    state = {
		userId: null,
		toHome: false,
	}
	
	handleSelectionChanged = (e) => {
		this.setState((prevState) => {
		  return {
			...prevState,
			userId: e.target.value,
		  };
		});
	}
	
	handleLogin = function(event) {
		const { userId } = this.state;
		const { dispatch } = this.props;
	
		dispatch(loginUser(userId));
	
		this.setState(function(previousState) {
		  return {
			...previousState,
			toHome: true,
		  };
		});
	}
	
	componentDidMount() {
		this.props.dispatch(logOutUser())
	}

    render() {

        const { userId, toHome } = this.state;
		const { users } = this.props;

		console.log(this.props)

    return (
		<div>
        <div id="container" className="container border border-primary mt-2 pt-3">
        <div className="row">
            <div className="col-sm-10 offset-sm-1 text-center">
                <LoginHeader />
                <div className="info-form .w-100">
                    <form className="form-inline justify-content-center p-4" onChange = 
                    {() => {document.getElementById('itemSelect').value !== 'default' ?
                     document.getElementById('btn_submit').disabled = false : document.getElementById('btn_submit').disabled = true}}>
                        <div className="form-group">
                            <select id="itemSelect" className="form-select .w-100" onChange={(event) => this.handleSelectionChanged(event)}>
                            <option defaultValue disabled id="default">Select user...</option>
						{Object.keys(users).map(function(key) {
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
                            <button id="btn_submit" className="btn btn-primary" type="submit" onClick={(event) => this.handleLogin(event)}>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
	</div>
    )}}

    function mapStateToProps ({users}) {  
        return {
          users,
        };
      }

export default connect(mapStateToProps)(LoginComponent)