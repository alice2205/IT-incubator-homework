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
    const [disabled, setDisabled] = useState(false)


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)// need to fix any
        setName(e.currentTarget.value) // need to fix
    }


    const addUser = () => {
        if(name.trim()!=='') {
            addUserCallback(name)
            alert('Hello '+ name +'!')
            setName('')
            setDisabled(false)
        } else {
            setError('Name is required')
            setDisabled(true)
        }
        // need to fix
    }
    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            disabled={disabled}
        />
    )
}

export default GreetingContainer
