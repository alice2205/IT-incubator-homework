import React from 'react'
import cats from './purr-fatal-error.png'
import s from './Error404.module.css'
import SuperButton from "../../../h4/common/c2-SuperButton/SuperButton";
import {useNavigate} from "react-router-dom";

function Error404() {
    const navigate = useNavigate()

    return (
        <div className={s.error_container}>
            <div className={s.error}>
                <div className={s.box}>
                    <h1>404</h1>
                    <h3>Page not found! Return to the previous page</h3>
                </div>
                <img className={s.cats} src={cats}/>
            </div>
            <SuperButton onClick={()=> {navigate('/pre-junior')}}>Back</SuperButton>
        </div>
    )
}

export default Error404
