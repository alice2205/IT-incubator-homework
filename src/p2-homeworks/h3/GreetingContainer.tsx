import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

export type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState <string>('') // need to fix any
    const [error, setError] = useState<string|null>(null) // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value !=='') {
            setError(null)// need to fix any
            setName(e.currentTarget.value) // need to fix

        } else {
            setName('')
            setError('Name is required')
        }

    }

    const addUser = () => {
        if(name.trim()!=='') {
            addUserCallback(name.trim())
            alert('Hello '+ name.trim() +'!')
            setName('')
        } else {
            setError('Name is required')
        }
        // need to fix
    }

    const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && name) {
            addUser()
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnterPress={onEnterPress}
        />
    )
}

export default GreetingContainer
