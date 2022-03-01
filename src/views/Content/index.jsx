import React, { Fragment } from 'react';
import content from '../../assets/resumeContent.json';
import style from './style.module.css';
import { Divisions } from '../../components';

export default function Content() {

    return(
        <div className={style.content}>
                {
                    content.mainContent.map(
                        element => {
                            return (
                                <Fragment>
                                <div className={style.heading}>{element.title}</div>
                                <Divisions content={element.content} type={element.type} />
                                </Fragment>
                            )
                        }

                    )
                }
        </div>
    )
}