import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback:(_id: number)=> void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (filter: FilterType) => {props.setFilter(filter)} // need to fix
    const setHigh = (filter: FilterType) => {props.setFilter(filter)}
    const setMiddle = (filter: FilterType) => {props.setFilter(filter)}
    const setLow = (filter: FilterType) => {props.setFilter(filter)}

    return (
        <div>
            {mappedAffairs}
            <SuperButton className={props.filter === 'all'? s.active_filter : ''} onClick={()=>setAll('all')}>All</SuperButton>
            <SuperButton className={props.filter === 'high'? s.active_filter : ''} onClick={()=>setHigh('high')}>High</SuperButton>
            <SuperButton className={props.filter === 'middle'? s.active_filter : ''} onClick={()=>setMiddle('middle')}>Middle</SuperButton>
            <SuperButton className={props.filter === 'low'? s.active_filter : ''} onClick={()=>setLow('low')}>Low</SuperButton>
        </div>
    )
}

export default Affairs
