import React , {Component } from 'react'
import Question from './Question';
// Material UI
import { theme } from '../theme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux'

class homeBody extends Component {

    state = {
        amount: 0
    }

    handleChangeState = (e, amount) => {
        this.setState({amount});
    }

    render() {

        const {answer , unAnswer} = this.props
        const question = this.state.amount === 0 ? answer : unAnswer
        console.log(this.props)

    return (
        <div className='home'>
        <MuiThemeProvider theme={theme}>
          <div className='tabs-container'>
            <Tabs
              value={this.state.amount}
              onChange={this.handleChangeState}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Unanswered" />
              <Tab label="Answered" />
            </Tabs>
          </div>
        </MuiThemeProvider>
        <div className='questions-container'>
          {question.length === 0 && <p>No questions here!</p>}
          <ul>
            {question.map((id) => (
              <li key={id} style={{listStyle: 'none' }}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}}

const sortByTime = (questions, qKind) => {
    return qKind.sort((first,second) => questions[second].timestamp - questions[first].timestamp);
}

const unAnswered = (qKind, answeredIds) => {
    return qKind.filter(questionId => !(answeredIds.includes(questionId)));
}

const mapStateToProps = ({questions , users , auth}) => {
    const user = users[auth]
    const answer = user ? Object.keys(user['answers']) : []
    const unAnswer = user ? unAnswered(Object.keys(questions), answer): []
    return {
        user,
        answer: sortByTime(questions , answer),
        unAnswer: sortByTime(questions, unAnswer)
    }
}

export default connect(mapStateToProps)(homeBody)