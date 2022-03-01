import React from 'react';

export default function HeadedPoints({content}) {
    return (
        content.map(item => {
            return (
                <li><strong>{item.title}</strong>: {item.content.map(tech => <span>{tech}</span>)}</li>
            )
        })

    )
}