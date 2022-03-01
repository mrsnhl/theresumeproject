import React from 'react';
import style from './style.module.css';
import content from '../../assets/resumeContent.json';

export default function Footer() {
    return(
        <div className={style.footer}>
            {content.courses.courseLisubtitle.map(item => 
            {
                return(
                <div>
                    {item}
                    </div>
                    )
                }
            )
            }
        </div>
    )
}