import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';

import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState()


  useEffect( () => {
    setUsername(prompt('Please enter your name'))



  },[])


  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id ,message : doc.data()})))
    })
  }, [])




  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className="App">
      <div className="welcome">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div style={{ fontWeight: '900' }}>
            <span style={{ color: 'blue', fontWeight: '900' }}>Free</span>chat
          </div>
        </div>

        <div>
          <div style={{ fontWeight: '800', color: 'lightBlue' }}>
            created by: Syket Das
          </div>
          <div style={{ fontWeight: '800', color: 'lightBlue' }}>
            saiketsd23@gmail.com
          </div>
        </div>
      </div>
      <div
        className="user_welcome"
        style={{ fontWeight: '800', color: 'gray' }}
      >
        {`Welcome  ${username}  to my chat app `}
      </div>
      <form style={{ backgroundColor: 'lightBlue' }}>
        <Input
          placeholder="Enter your message.."
          style={{ flexGrow: '8' }}
          value={input}
          onChange={handleChange}
        />

        <Button
          className="btn"
          style={{ background: 'blue', 'color':'#fff' }}
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          send message
        </Button>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => {
          return (
            <>
              <Message key={id} username={username} message={message} />
            </>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
