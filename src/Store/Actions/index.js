import { getInitialData, saveQuestionAnswer, saveQuestion } from '../../API/DataApi';
import { receiveUsers, userAnswer, userQuestion } from '../Actions/Users';
import { receiveQuestions, questionAnswer, addQuestion } from '../Actions/Question';

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      })
  }
}

export function handleAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { auth } = getState();
    return saveQuestionAnswer({
      auth,
      qid,
      answer
    })
      .then(() => {
        dispatch(questionAnswer({auth, qid, answer}));
        dispatch(userAnswer({auth, qid, answer}));
      })
  }
}

export function handleSaveQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { auth } = getState();

    return saveQuestion({
      author: auth,
      optionOneText,
      optionTwoText
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(userQuestion(question));
      })
  }
}