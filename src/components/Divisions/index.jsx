import { Sections, Points, HeadedPoints } from ".."

export default function Divisions({type, content}) {
    switch(type) {
        case "sections":
            return <Sections content={content} />
        case "points": 
            return <Points content={content} />
        case "headedpoints":
            return <HeadedPoints content={content} />
        default: 
            return <div>{content}</div>
    }
}