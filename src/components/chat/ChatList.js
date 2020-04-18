import React, { useEffect, useRef } from 'react';
import './Chat.css';

const ChatList = props => {
  const container = useRef(null);

  useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  }, [props.children.length])

  return (
    <div className="chat-list" id={props.id} ref={container}>
    {
      props.children
    }
    </div>
  )
}

export default ChatList;