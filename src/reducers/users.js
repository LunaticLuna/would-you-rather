import { RECEIVE_USERS, SAVE_ANSWER_USER} from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_ANSWER_USER:
      const {qid,authedUser,answer} = action
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [qid]: answer
          }
        }
      }
    
    default :
      return state
  }
}