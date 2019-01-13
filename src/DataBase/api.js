import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
    ]).then(([users,questions])=>({
      users,
      questions,
    }))
}

export function saveQuestion(info){
  console.log("saveQuestion")
  return _saveQuestion(info)
}
export function saveAnswer({ authedUser, qid, answer }){
  console.log("saveAnswer")
  return _saveQuestionAnswer({ authedUser, qid, answer })
}