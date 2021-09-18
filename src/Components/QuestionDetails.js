import React , { Component } from 'react'
import { handleAddAnswer } from '../Store/Actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

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
           answers: answerSelect 
        }))
    }

    handleSelectedAnswer = (answers) => {
        this.setState(PreviousState => {
            return {
                ...PreviousState,
                answerSelect: answers
            }
        })
    }

    render(){

        const {q, authorName, answered, voteOfOptionOne, voteOfOptionTwo, totalVotes, percentageOfOptionOne, percentageOfOptionTwo, answerForAuth} = this.props
        const { answerSelect } = this.state

        console.log(answerSelect)
        if(!q){
            return <Redirect to="/*" />   
        }
        console.log(this.props)
        
        
    return (
        <div>                   
                    {answered ? (
                        <div className="row gap-3 ms-2 w-100">
                        <div className="p-2 bg-light border">
                            <div className="col-md-2">
                                <img src={`${authorName.avatarURL}`} className="img-fluid rounded-start w-50" alt="..." />
                                    <br />
                                <h6 className="d-inline">Asked by : {`${authorName.name}`}</h6>
                            </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Would you rather</h5>
                            <div className="custom-control custom-radio m-3">
                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadio1" onClick= {() => this.handleSelectedAnswer('optionOne')}> &emsp;{q.optionOne.text}</label>
                            </div>
                            <div className="custom-control custom-radio m-3">
                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadio2" onClick= {() => this.handleSelectedAnswer('optionTwo')}> &emsp;Or {q.optionTwo.text}</label>
                            </div>
                            <button className={answerSelect ?  'btn btn-primary m-3' : 'disabled'} type="button" onClick={(e) => {this.saveAnswerQuestion(e)}}>Submit</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    ): (
                        // <div className="question-body">
                            {/* <div className="would-you">Results: </div>
                            <div className={answered === 'optionOne' ? 'option-container selected': 'option-container'}>
                                <div className="option-one">{q.optionOne.text}</div>

                                <div className="poll-container">
                                    <div>{voteOfOptionOne} out of {totalVotes} votes</div>
                                    <div>Percentage votes: {percentageOfOptionOne}%</div>
                                </div>
                                <div className="your-vote">Your pick</div>
                            </div>

                            <div className={answered === 'optionTwo' ? 'option-container selected': 'option-container'}>
                                <div className="option-two">{q.optionTwo.text}</div>

                                <div className="poll-container">
                                    <div>{voteOfOptionTwo} out of {totalVotes} votes</div>
                                    <div>Percentage votes: {percentageOfOptionTwo}%</div>
                                </div>
                                <div className="your-vote">Your pick</div>
                            </div>
                        </div> */}
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