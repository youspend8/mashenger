import React, { useState, useEffect } from 'react';
import './Chat.css';
import InputText from '../../atoms/input/InputText';
import Button from '../../atoms/button/Button';
import ChatList from './ChatList';
import FlexArea from '../../templates/FlexArea';
import ChatItem from './ChatItem';

let client;

const ChatView = props => {
  const [ message, setMessage ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ messageList, setMessageList ] = useState([]);

  useEffect(() => {
    setUsername((Math.random() * 1000).toFixed(0));
    connect();
  }, []);

  const connect = e => {
    const socket = new window.SockJS('http://localhost:8080/socket');
    client = window.Stomp.over(socket);
    client.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    client.subscribe('/topic/public', onMessageReceive);
    client.send('/chat/chat.join', {}, JSON.stringify({ username: username, type: 'JOIN', content: '접속'}));
  }

  const onError = () => {

  }

  const send = e => {
    if (message === '') {
      return;
    }
    const content = {
      content: message,
      username: username,
      type: 'CHAT'
    }
    client.send('/chat/chat.send', {}, JSON.stringify(content));
    
  }

  const onMessageReceive = payload => {
    setMessageList(array => [...array, JSON.parse(payload.body)]);
  }

  const handleMessageInputKeyPress = e => {
    if (e.key === 'Enter') {
      send(e);
      e.target.value = '';
      setMessage('');
    }
    e.preventDefault();
  }

  return (
    <div className="chat-view">
      <ChatList>
      {
        messageList.map((item, index) => {
          return <ChatItem message={item} key={index} />
        })
      }
      </ChatList>

      <FlexArea>
        <InputText 
          name="message"
          id="message"
          onChange={e => setMessage(e.target.value)}
          onKeyPress={handleMessageInputKeyPress}
          flexGrow={4}
        />
        <Button
          title="전송"
          onClick={send}
          flexGrow={1}
        />
      </FlexArea>
    </div>
  )
}

export default ChatView;