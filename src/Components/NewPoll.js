import React, { Component } from 'react'
import { handleSaveQuestion } from '../Store/Actions/index'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NewPoll extends Component{

    state = {
        optionOne: '',
        optionTwo: '',
        toMainPage: false
    }

    handleChange = name => e => {
        this.setState({
          [name]: e.target.value,
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
    
        const { optionOne, optionTwo } = this.state;
        this.props.dispatch(handleSaveQuestion(optionOne, optionTwo));
        this.setState(() => ({
          optionOne: '',
          optionTwo: '',
          toMainPage: true
        }));
      }
    

    render() {

        const { optionOne, optionTwo, toMainPage } = this.state;

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
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput" 
                    value={optionOne}
					          onChange={this.handleChange('optionOne')} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Second Option</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput2" 
                    value={optionTwo}
					          onChange={this.handleChange('optionTwo')} />
                </div>
                <br />
                <button 
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}
                disabled={optionOne === '' || optionTwo === ''}
                >Submit Question</button>
            </form>
        </div>
    )}
}

export default connect()(NewPoll)