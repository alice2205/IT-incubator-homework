import React from 'react'
import {AffairType} from "./HW2";

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
                <td>{props.affair.priority}</td>
                <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
            </tr>

        </table>
    )
}

export default Affair
