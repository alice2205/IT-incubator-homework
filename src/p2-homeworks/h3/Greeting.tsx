import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string|null// need to fix any
    totalUsers: number // need to fix any
    disabled: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, disabled} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : s.input_valid  // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} required placeholder={'Name'}
            />
            <button className={s.button} onClick={addUser} disabled={disabled}>Add</button>
            <span>{totalUsers}</span>
            {error &&<div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
