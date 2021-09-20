import React , { Component } from 'react'
import { handleAddAnswer } from '../Store/Actions/index'
import { connect } from 'react-redux'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class QuestionDetails extends Component{
    state = {
        answerSelect: ''    
    }

    saveAnswerQuestion = (e) =>  {
        e.preventDefault()

        const { answerSelect } = this.state
        const {dispatch, id, auth} = this.props

        dispatch(handleAddAnswer({ 
           auth,
           qid: id,
           answer: answerSelect 
        }))
    }

    handleSelectedAnswer = (answer) => {
        this.setState(PreviousState => {
            return {
                ...PreviousState,
                answerSelect: answer
            }
        })
    }

    render(){

        const {q, authorName, answered, voteOfOptionOne, voteOfOptionTwo, totalVotes, percentageOfOptionOne, percentageOfOptionTwo, answerForAuth} = this.props
        const { answerSelect } = this.state

        if(!q){
            return <Redirect to="/not" />   
        }
        
    return (
        <div>    
            {answered ? (
                <div className="row gap-3 ms-2 w-100">
                <div className="p-2 bg-light border">
                    <div className="col-md-2">
                        <img src={`${authorName.avatarURL}`} className="img-fluid rounded-start w-50" alt="..." />
                            <br />
                        <h6 className="d-inline">&emsp;{`${authorName.name}`} Asked By: </h6>
                    </div>
                <div className="col-md-8">
                <div className="card-body">
                <h4 className="card-title">Results: </h4>
                    <h5 className="card-title">Would you rather</h5>
                    <div className="custom-control custom-radio m-3">
                        <div className={answerForAuth === 'optionOne' ? 'p-3 mb-2 bg-danger text-white' : 'p-3 mb-2 bg-light text-dark'}>
                            <li>Option One : {q.optionOne.text}</li>
                                <ProgressBar now={percentageOfOptionOne} />
                            <h5>{voteOfOptionOne} out of {totalVotes} votes</h5>
                            <h5>Percentage votes: {percentageOfOptionOne} %</h5>
                        </div>
                    </div>
                    <div className="custom-control custom-radio m-3 optionTwo">
                    <div className={answerForAuth === 'optionTwo' ? 'p-3 mb-2 bg-danger text-white' : 'p-3 mb-2 bg-light text-dark'}>
                        <li>Option Two : {q.optionTwo.text}</li>
                            <ProgressBar now={percentageOfOptionTwo} />
                            <h5>{voteOfOptionTwo} out of {totalVotes} votes</h5>
                            <h5>Percentage votes: {percentageOfOptionTwo} %</h5>
                    </div>
                    </div>
                    
                    <Link to='/home' className='btn btn-primary m-3'type="button">Back</Link>
                </div>
            </div>
            </div>
            </div>
            ): (
                <div className="row gap-3 ms-2 w-100">
                <div className="p-2 bg-light border">
                    <div className="col-md-2">
                        <img src={`${authorName.avatarURL}`} className="img-fluid rounded-start w-50" alt="..." />
                            <br />
                        <h6 className="d-inline">&emsp; {`${authorName.name}`} Askes: </h6>
                    </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Would you rather</h5>
                    <div className="custom-control custom-radio m-3">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio1" onClick= {() => this.handleSelectedAnswer('optionOne')}> &emsp;{q.optionOne.text}</label>
                    </div>
                    <div>&emsp;&emsp;OR</div>
                    <div className="custom-control custom-radio m-3">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio2" onClick= {() => this.handleSelectedAnswer('optionTwo')}>&emsp; {q.optionTwo.text}</label>
                    </div>
                    <button className='btn btn-primary m-3' disabled = {!answerSelect} type="button" onClick={(e) => {this.saveAnswerQuestion(e)}}>Submit</button>
                </div>
            </div>
            </div>
            </div>
            )}
        </div>
            
    )}
}

const mapStateToProps = ({auth, users, questions}, { match }) => {
    const { id } = match.params
    const q = questions[id]
    const authorName = q ? users[q.author] : null
    const answered = q ? (q.optionOne.votes.indexOf(auth) > -1 || q.optionTwo.votes.indexOf(auth) > -1) : false 
    const voteOfOptionOne = (q && q.optionOne.votes) ? q.optionOne.votes.length : 0
    const voteOfOptionTwo = (q && q.optionTwo.votes) ? q.optionTwo.votes.length : 0
    const totalVotes = voteOfOptionOne + voteOfOptionTwo
    const percentageOfOptionOne = ((voteOfOptionOne / totalVotes) * 100).toFixed(1)
    const percentageOfOptionTwo = ((voteOfOptionTwo / totalVotes) * 100).toFixed(1)
    
    const answerForAuth = users[auth].answers[id]

    return {
        auth,
        id,
        q,
        authorName,
        answered,
        voteOfOptionOne,
        voteOfOptionTwo,
        totalVotes,
        percentageOfOptionOne,
        percentageOfOptionTwo,
        answerForAuth
    }
}

export default connect(mapStateToProps)(QuestionDetails)