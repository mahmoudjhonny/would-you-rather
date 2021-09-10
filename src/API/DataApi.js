import { 
    _getUsers, 
    _getQuestions, 
    _saveQuestion, 
    _saveQuestionAnswer } from './_DATA' ;

    export function getAllData() {
        return Promise.all([_getUsers(), _getQuestions()]).then(
          ([users, questions]) => ({ users, questions })
        );
      }
      
      export function saveAnswersOfQuestions({ authedUser, qid, answer }) {
        return _saveQuestionAnswer({ authedUser, qid, answer });
      }
      
      export function QuestionsSaving(question) {
        return _saveQuestion(question);
      }