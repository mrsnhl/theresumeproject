import React from 'react';
import content from '../../assets/resumeContent.json';
import style from './style.module.css';

export default function Header() {
    const info = content.personalInformation;
    return(
        <div className={style.header}>
            <div>
                <div className={style.heading}>{info.name}</div>
            </div>
            <div className={style.otherInformation}>
                <div>{info.email}</div>
                <div>{info.phone}</div>
                <div>{info.linkedin}</div>
                <div>{info.github}</div>
            </div>
        </div>
    )
}