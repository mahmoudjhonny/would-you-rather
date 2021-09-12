import { 
    _getUsers, 
    _getQuestions, 
    _saveQuestion, 
    _saveQuestionAnswer} from './_DATA' ;

    export function getAllData() {
        return Promise.all([_getUsers(), _getQuestions()]).then(
          ([users, questions]) => ({ users, questions })
        );
      }
      
      export function addQuestion(question) {
        return _saveQuestion(question)
      }
      
      export function saveAnswer(answer) {
        return _saveQuestionAnswer(answer)
      }