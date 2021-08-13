import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Message.css'

const Message = forwardRef( ({message, username}, ref) => {

    const isUser = username === message.username


    return (
      <div ref={ref}>
        <Card ref={ref} className={`message ${isUser && 'message_user'}`}>
          <CardContent style={{ padding: '8px' }}>
            <Typography color="white" variant="h5" component="h5">
              <span className="usrLogo">
                {message.username}
              </span>: {'  '+'  '}
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
})

export default Message
