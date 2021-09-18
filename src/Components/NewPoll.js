import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NewPoll extends Component{

    render() {

    return (
        <div className="border border-primary w-100 p-3">
            <h3>Would You Rather</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">First Option</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput" 
                    value="{firstOption}"
                    placeholder="first Option"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Second Option</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput2" 
                    value= '{secondOption}'
                    placeholder="second Option"/>
                </div>
                <br />
                <button 
                className="btn btn-primary"
                >Submit Question</button>
            </form>
        </div>
    )}
}

export default (NewPoll)