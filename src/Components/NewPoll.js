import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from '../Store/Actions/index'
import { connect } from 'react-redux'

class NewPoll extends Component{

    state = {
        firstOption: '',
        secondOption: '',
        toMainPage: false
    }

    handleChange = (name) => 
        (e) => {
            this.setState({
                [name]: e.target.value
            });
        }

    handleSubmitButton = (e) => {
        const {firstOption,secondOption} = this.state
        this.props.dispatch(handleSaveQuestion(firstOption, secondOption));

        this.setState({
            firstOption: '',
            secondOption: '',
            toMainPage: true
        })
    }

    render() {

        const {firstOption, secondOption, toMainPage} = this.state
        console.log(this.props)

        if(toMainPage) {
            return <Redirect to={{ pathname: '/home' }} />
        }

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
                    value={firstOption}
                    placeholder="first Option"
                    onChange={this.handleChange('firstOption')}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Second Option</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="formGroupExampleInput2" 
                    value= {secondOption}
                    placeholder="second Option"
                    onChange={this.handleChange('secondOption')}/>
                </div>
                <br />
                <button 
                className="btn btn-primary"
                onClick={this.handleSubmitButton}
                disabled={firstOption === '' && secondOption ===''}
                >Submit Question</button>
            </form>
        </div>
    )}
}

const mapStateToProps = ({auth}) => {
    return {
         logOut: auth === null
    }
}

export default connect(mapStateToProps)(NewPoll)