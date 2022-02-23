import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://avatars0.githubusercontent.com/u/58340587?v=4',
    name: 'Some Name',
    message: 'Some text',
    time: '20:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            {/*should work (должно работать)*/}

            <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
