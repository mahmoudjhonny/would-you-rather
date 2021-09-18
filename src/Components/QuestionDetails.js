import React , { Component } from 'react'
import { handleAnswer } from '../Store/Actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class QuestionDetails extends Component{
    state = {
        answerSelect: ''    
    }

    saveAnswerQuestion = (e) =>  {
        e.preventDefault()

        const { answerSelect } = this.state
        const {dispatch, id} = this.props

        dispatch(handleAnswer({
           qid: id,
           answer: answerSelect 
        }))
    }

    handleSelectedAnswer = (answer) => {
        this.state(PreviousState => {
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
            return <Redirect to="/*" />   
        }
        console.log(this.props)
        
        
    return (
        <div>
            
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