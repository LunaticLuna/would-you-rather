import { getInitialData,saveAnswer } from '../DataBase/api'
import { receiveUsers, saveAnswerUser } from '../actions/users'
import { receivePolls, saveAnswerPoll } from '../actions/polls'
import { setAuthedUser } from '../actions/authedUser'


const AUTHED_ID = 'johndoe'
  // johndoe
// function saveAnswerAction({qid,answer,authedUser}){
//   return {
//     type: SAVE_ANSWER,
//     qid,
//     answer,
//     authedUser
//   }
// }
export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({users,questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
export function handleSaveAnswer(qid,answer){
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveAnswer({qid,authedUser,answer})
      .then(() => {
        dispatch(saveAnswerUser({qid,answer,authedUser}))
        dispatch(saveAnswerPoll({qid,answer,authedUser}))
      })
  }
}