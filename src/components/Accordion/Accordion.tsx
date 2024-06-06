import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
}

type AccordionTitleProps = {
    title: string
}

export const Accordion = ({title, collapsed}: AccordionProps) => {
    return (
        collapsed
            ? <div>
                <AccordionTitle title={title}/>
            </div>
            : <div>
                <AccordionTitle title={title}/>
                <AccordionBody/>
            </div>
    )
}

const AccordionTitle = ({title}: AccordionTitleProps) => {
    return (
        <h3>{title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}