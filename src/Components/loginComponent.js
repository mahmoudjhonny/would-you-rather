import React , { Component } from 'react'
import LoginHeader from './loginHeader'

class LoginComponent extends Component{

    render() {
    return (
        <div id="container" className="container border border-primary mt-2 pt-3">
        <div className="row">
            <div className="col-sm-10 offset-sm-1 text-center">
                <LoginHeader />
                <div className="info-form .w-100">
                    <form className="form-inline justify-content-center p-4" onChange = 
                    {() => {document.getElementById('itemSelect').value !== 'default' ?
                     document.getElementById('btn_submit').disabled = false : document.getElementById('btn_submit').disabled = true}}>
                        <div className="form-group">
                            <select id="itemSelect" className="form-select .w-100">
                                <option value="default" id= 'default' defaultValue>Select User</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <br />
                        <div class="d-grid">
                            <button disabled id="btn_submit" class="btn btn-primary" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )}}

export default LoginComponent