import React from 'react';
import resume from '../../assets/resumeContent.json';
import style from './style.module.css';

export default function Table() {
    return(
        <div>
            <table className={style.table}>
                <thead>
                    <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Degree
                    </th>
                    <th>
                        Institute
                    </th>
                    <th>
                        Marks
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resume.educationalQualifications.map(
                            row => {
                                return(
                                    <tr>
                                        <td>{row.year}</td>
                                        <td>{row.degree}</td>
                                        <td>{row.institute}</td>
                                        <td>{row.marks}</td>
                                    </tr>
                                )
                            }
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}