import React from 'react'
import './style.css'
import Avatar from './Avatar'
import Message from './Message'

const Tweet = () => {
  return (
    <>
    <div className="main">
    <div className="tweet">   
    <Avatar/>
    Tweet
    <Message/>
    </div>
    </div>
    
    
    </>
  )
}

export default Tweet;