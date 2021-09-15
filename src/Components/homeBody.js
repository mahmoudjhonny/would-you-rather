import React , {Component } from 'react'
import AnsweredMainPage from './answeredMainPage'
import UnAnsweredMainPage from './unAnswerMainPage'

class homeBody extends Component {

    // state = {
    //     value: 0
    // }

    // handleChange = (e, value) => {
    //     this.setState({
    //         value,
    //     })
    // }
    

    render() {

        // console.log(this.props)

        // const { answerdQ } = this.props

        // console.log(answerdQ)
    return (
        <div className="d-flex align-items-start ms-2 mt-3">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-unansewer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-unansewer" type="button" role="tab" aria-controls="v-pills-unansewer" aria-selected="true">Un Answered</button>
                <button className="nav-link" id="v-pills-ansewer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ansewer" type="button" role="tab" aria-controls="v-pills-ansewer" aria-selected="false">Answered </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-unansewer" role="tabpanel" aria-labelledby="v-pills-unansewer-tab">
                    <UnAnsweredMainPage />
                </div>
                <div className="tab-pane fade" id="v-pills-ansewer" role="tabpanel" aria-labelledby="v-pills-ansewer-tab">
                    <AnsweredMainPage />
                </div>
            </div>
        </div>
    )}}


    // const mapStateToProps = ({ questions, users, auth }) => {
    //     const user = users[auth];
    //     const answerdQ = user ? Object.keys(user['answers']) : []
    //     // const unAnswerQ = user ? getUnanswered(users['questions'] , answerdQ) : []
    //     return {
    //         user,
    //         questions: user ? user['questions'] : [],
    //         answerdQ
    //         // unAnswerQ
    //     }
    // }

export default (homeBody)