import { getInitialData, saveQuestion, saveQuestionAnswer } from '../../API/DataApi';
import { receiveUsers } from '../Actions/Users';
import { receiveQuestions, addQuestion, addAnswer } from '../Actions/questions';

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { auth } = getState()

    const questionInfo = {
      optionOneText,
      optionTwoText,
      author: auth
    }

    return saveQuestion(questionInfo).then((question) => {
      console.log('Created Question ', question)
      dispatch(addQuestion(question))
    }).catch((error) => {
      console.log('There is a problem')
    })
  }
}

export function handleAddAnswer(info) {
  return (dispatch) => {
      //assuming answer gets updated correctly
      dispatch(addAnswer(info))
      return saveQuestionAnswer(info)
          .then(() => console.log('recorded answer'))
          .catch( (error) => {
              console.log('There was a problem saving question.');
          })
  }
}