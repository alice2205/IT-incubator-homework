import React from 'react'
import {PATH} from "./Pages";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    const isActiveStyle = {
        textDecoration: 'none',
        color: 'blue'
    };

    return (
        <>
            <div className={s.menu_container}>
                <div className={s.container}>
                    <NavLink className={s.container_link} style={({isActive}) => isActive ? isActiveStyle : {}}
                             to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
                    <NavLink className={s.container_link} style={({isActive}) => isActive ? isActiveStyle : {}}
                             to={PATH.JUNIOR}>JUNIOR</NavLink>
                    <NavLink className={s.container_link} style={({isActive}) => isActive ? isActiveStyle : {}}
                             to={PATH.JUNIOR_PLUS}>JUNIOR +</NavLink>
                </div>
                <div className={s.menu_btn} ></div>
            </div>

        </>

    )
}

export default Header
