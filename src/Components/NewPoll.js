import React, { Component } from 'react'

class NewPoll extends Component{
    render() {
    return (
        <div className="border border-primary w-50 m-3 p-3">
            <h3>Would You Rather</h3>
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">First Option</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="first Option"/>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Second Option</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="second Option"/>
                </div>
                <br />
                <button className="btn btn-primary">Submit Question</button>
            </form>
        </div>
    )}
}

export default NewPoll
