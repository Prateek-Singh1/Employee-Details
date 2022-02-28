import React from 'react'

export const Goal = () => {
    const Missedgoal = () => {
        return (
            <h1>hurray Goal</h1>
        )
    }

    const Missedgoal = () => {
        return (
            <h1>Missed</h1>
        )
    }

  return (
    <div>
        {isGoal ? Missedgoal : Missedgoal}
    </div>
  )
  
}
