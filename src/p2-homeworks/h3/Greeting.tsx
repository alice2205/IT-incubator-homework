import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string|null// need to fix any
    totalUsers: number // need to fix any
    onEnterPress: (e: React.KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPress} // деструктуризация пропсов
) => {

    // const inputClass = error ? s.error : s.input_valid // need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} placeholder={'Name'}
            onKeyDown={onEnterPress}
            />
            <SuperButton onClick={addUser} disabled={!name}>Add</SuperButton>
            <span>{totalUsers}</span>
            {/*<div className={s.errorMessage}>{error}</div>*/}
        </div>
    )
}

export default Greeting
