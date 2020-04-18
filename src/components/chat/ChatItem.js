import React from 'react';
import './Chat.css';

const ChatItem = props => {
  const { content, username, createDate, type } = props.message;

  if (type === 'JOIN') {

  } else if (type === 'LEAVE') {

  } else if (type === 'CHAT') {

  }
  
  return (
    <div className="chat-item">
      <div className="chat-item-profile">
        <div className="chat-item-default-image">
        {
          username.substring(0, 1)
        }
        </div>
      </div>
      <div className="chat-item-message">
        <div className="chat-item-username">
        {
          username
        }
        </div>
        <div className="chat-item-content">
        {
          content
        }
        </div>
      </div>
    </div>
  )
}

export default ChatItem;