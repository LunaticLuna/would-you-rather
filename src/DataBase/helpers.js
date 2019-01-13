export function formatPoll(poll,authedUser,author){
  const {id, timestamp, optionOne,optionTwo} = poll
  const {name} = author

  return {
    id,
    authorName: name,
    timestamp,
    optionOne,
    optionTwo,
    hasVoted: optionOne.votes.includes(authedUser) 
              || optionTwo.votes.includes(authedUser)
  }
}