import React from 'react';
import Divisions from '../Divisions';
import style from './style.module.css';

export default function HeadedPoints({content}) {
    return (
        content.map(item => {
            return (
                <div>
                    <div className={style.header}>
                    <div>
                    <div className={style.title}>{item.title}</div>
                    <div className={style.subtitle}>{item.subtitle}</div>
                    </div>
                    <div className={style.locationtime}>
                    <div className={style.location}>{item.location}</div>
                    <div className={style.time}>{item.time}</div>
                    </div>
                    </div>
                    <Divisions type={item.contentType} content={item.content} />
                </div>
            )
        })

    )
}