import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (newId:number) => {
        props.deleteAffairCallback(newId)
    }// need to fix

    return (
        <table>
            <tr>
                <td>{props.affair.name}</td>
                <td><div className={s.priority}>{props.affair.priority}</div></td>
                <SuperButton red onClick={()=>deleteCallback(props.affair._id)}>delete</SuperButton>
            </tr>

        </table>
    )
}

export default Affair
