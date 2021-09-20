import React, { Component } from 'react'
import { handleAddQuestion } from '../Store/Actions/index'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NewPoll extends Component{

    state = {
        optionOneText: '',
        optionTwoText: '',
        toMainPage: false
    }

    handleInputChange = (event, type) => {
      const value = event.target.value;
  
      this.setState((state) => {
        return type === 'option1' ? {...state, optionOneText: value} : {...state, optionTwoText: value}
      });
    }
  

      handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { optionOneText, optionTwoText } = this.state;
        dispatch(handleAddQuestion(optionOneText, optionTwoText));
        this.setState(() => ({
          optionOneText: '',
          optionTwoText: '',
          toMainPage: true
        }));
      }
    

    render() {

        const { toMainPage, optionOneText, optionTwoText } = this.state;

    if (toMainPage) {
      return <Redirect to={{ pathname: '/home' }} />
    }

    return (
        <div className="border border-primary w-100 p-3">
            <h3>Would You Rather</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">First Option</label>
                    <input 
                    name = "optionOneText"
                    type="text" 
                    placeholder= "Enter Option One Text"
                    className="form-control" 
                    id="formGroupExampleInput" 
                    value={optionOneText}
					          onChange={(event) => this.handleInputChange(event, 'option1')} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Second Option</label>
                    <input 
                    name = "optionTwoText"
                    type="text" 
                    placeholder= "Enter Option Two Text"
                    className="form-control" 
                    id="formGroupExampleInput2" 
                    value={optionTwoText}
					          onChange={(event) => this.handleInputChange(event, 'option2')} />
                </div>
                <br />
                <button 
                className="btn btn-primary"
                type="submit"
                disabled={optionOneText === '' || optionTwoText === ''}
                >Submit Question</button>
            </form>
        </div>
    )}
}

export default connect()(NewPoll)