import React from 'react';
import s from './PageIsUnderConstruction.module.css'
import work_space from './purr-space-technologies.png'

export function PageIsUnderConstruction () {
    return (
        <div className={s.work}>
            <h3>Page is under construction!</h3>
            <img className={s.work_space} src={work_space} alt={'work_space'}/>
        </div>
    )
}