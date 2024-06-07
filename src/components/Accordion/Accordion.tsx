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
        <div>
            <AccordionTitle title={title}/>
            { !collapsed && <AccordionBody/> }
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