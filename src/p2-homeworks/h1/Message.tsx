import React from 'react';
import s from './Message.module.css';


type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={s.block}>
            <img className={s.ava} src={props.avatar} alt = "ava"></img>
            <div className={s.block_message}>
                <p className={s.name}>{props.name}</p>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
