import React from 'react';

export default function Points({content}) {
    return (
        content.map(item => {
            return (
                <li>{item}</li>
            )
        })

    )
}