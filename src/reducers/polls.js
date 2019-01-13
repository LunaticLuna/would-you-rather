import { RECEIVE_POLLS, ADD_POLL, SAVE_ANSWER_POLL } from '../actions/polls'

export default function polls(state = {}, action){
  switch(action.type){
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL :
      const { poll } = action

      return {
        ...state,
        [action.poll.id]: action.poll,
      }
    case SAVE_ANSWER_POLL:
      const { qid, authedUser, answer} = action
      return {
        ...state,
        [action.qid]:{
          ...state[action.qid],
          [answer]: {
            ...state[action.qid][answer],
            votes: state[action.qid][answer].votes.concat([authedUser])
          }
        }
      }

    default:
      return state

  }
}