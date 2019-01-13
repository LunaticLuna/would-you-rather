import { saveQuestion, saveAnswer } from '../DataBase/api'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const SAVE_ANSWER_POLL = 'SAVE_ANSWER_POLL'

function addPoll(poll){
  return {
    type : ADD_POLL,
    poll,
  }
}

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}
export function handleAddPoll (optionOneText, optionTwoText){
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText, 
      optionTwoText, 
      author: authedUser,
    }).then((poll) => dispatch(addPoll(poll)))

  }
}
export function saveAnswerPoll(info){
  const {qid,authedUser,answer} = info

  return {
    type: SAVE_ANSWER_POLL,
    qid,
    authedUser,
    answer,
  }
}