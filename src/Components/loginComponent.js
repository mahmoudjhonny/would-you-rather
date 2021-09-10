import React , { Component } from 'react'
import LoginHeader from './loginHeader'

class LoginComponent extends Component{

    render() {
    return (
        <div id="container" className="container border border-primary pt-5">
        <div className="row">
            <div className="col-sm-10 offset-sm-1 text-center">
                <LoginHeader />
                <div className="info-form .w-100">
                    <form className="form-inline justify-content-center p-4" onChange = {() => {document.getElementById('btn_submit').disabled = false}}>
                        <div className="form-group">
                            <select id="itemSelect" className="form-select .w-100">
                                <option id= 'default' defaultValue>Select User</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <br />
                        <button disabled id="btn_submit" className="btn btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )}}

export default LoginComponent